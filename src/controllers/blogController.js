const authorModel = require("../models/authorModel");
const blogModel = require("../models/blogModel");

function hasBlankSpaces(str) {
  return str.match(/^\s+$/) !== null;
}
const createBlog = async function (req, res) {
  try {
    let blog = req.body;
    if (Object.keys(blog).length == 0) {
      return res.status(400).send({ status: false, msg: "data can't be empty" });
    }

    if (!blog.body)
      return res.status(400).send({ status: false, msg: "Please include an body" });
    if (!blog.authorId)
      return res.status(400).send({ status: false, msg: "Please include an authorId" });
    if (!blog.category)
      return res.status(400).send({ status: false, msg: "Please include an category" });

    let blogData = await authorModel.findById(blog.authorId);
    if (!blogData) res.status(400).send({ status: false, msg: "Please use right author id" });

    let blogCreated = await blogModel.create(blog);
    return res.status(201).send({ status: true, msg: "data created successfully", data: blogCreated, });
  }
  catch (err) {
    console.log("This is the error :", err.message);
    res.status(500).send({ status: false, msg: "Error", error: err.message });
  }
};
// Get Blogs =>

const getBlogs = async function (req, res) {
  try {
    let filterResult = req.query;
    if (Object.keys(filterResult).length == 0) {
      return res.status(400).send({ status: false, msg: "Please include some filter parameter" });
    }
    if (filterResult.authorId || filterResult.category || filterResult.tags || filterResult.subcategory) {
      let data = await blogModel.find(filterResult, { isDeleted: false }, { isPublished: true }).populate("authorId");
      if (data.length == 0) {
        return res.status(404).send({ status: false, msg: "Data not found" });
      }
      return res.status(200).send({ status: true, msg: data });
    }
    else return res.status(404).send({ status: false, msg: "Please include correct filter parameter" })
  }
  catch (err) {
    res.status(500).send({ status: false, msg: "Error", error: err.message });
  }
};

//Updating the blog ->

const updateBlog = async function (req, res) {
  try {
    let blogId = req.params.blogId;
    let data = req.body;
    if (Object.keys(data).length == 0) return res.status(404).send({ status: false, msg: "Please include some properties to be updated" });
    let blog = await blogModel.findById(blogId);
    if (Object.keys(blog).length == 0) {
      return res.status(404).send({ status: false, msg: "No such blog found" });
    }
    if (data.title) blog.title = data.title;
    if (data.category) blog.category = data.category;
    if (data.body) blog.body = data.body;
    if (data.tags) {
      blog.tags.push(data.tags);
    }
    if (data.subcategory) {
      blog.subcategory.push(data.subcategory);
    }
    blog.isPublished = true;
    blog.publishedAt = Date.now();
    let updateData = await blogModel.findOneAndUpdate({ _id: blogId }, blog, {
      new: true,
    });
    return res.status(200).send({ msg: updateData });
  } catch (err) {
    res.status(500).send({ msg: "Error", error: err.message });
  }
};


//Deleting the blog via params ->


const deleteBlog = async function (req, res) {
  try {
    let blogId = req.params.blogId;
    if (!blogId)
      return res.status(400).send({ status: false, msg: "Please include an blogId" });
    let blog = await blogModel.findById(blogId);
    if (!blog)
      return res.status(404).send({ status: false, msg: "BLOG NOT FOUND" });
    if (blog.isDeleted == true) {
      return res.status(400).send({ status: false, msg: "This data is already deleted" });
    }
    let newData = await blogModel.findOneAndUpdate({ _id: blogId }, { $set: { isDeleted: true } }, { new: true });
    return res.status(200).send({ status: true });
  } catch (err) {
    res.status(500).send({ status: false, msg: "ERROR", error: err.message });
  }
};

//deleting blog via query 

const deleteBlogByQuery = async function (req, res) {
  try {
    let data = req.query;
    if (Object.keys(data).length == 0) {
      return res.status(400).send({ status: false, msg: "no parameter provided for deleting" });
    }

    if (data.tags) {
      data.tags = {
        $in: data.tags,
      };
    }

    if (data.subcategory) {
      data.subcategory = {
        $in: data.subcategory,
      };
    }
    if (data.authorId || data.subcategory || data.category || data.tags || data.isPublished) {
      let newData = await blogModel.find(data, { isPublished: false })
      if (newData.length == 0) return res.status(404).send({ status: false, msg: 'BLOG NOT FOUND' });
      for (let i = 0; i < newData.length; i++) {
        if (newData[i].isDeleted == true) { return res.status(400).send({ status: false, msg: "This data is already deleted" }); }
      }
      const deletedData = await blogModel.updateMany(newData, { $set: { isDeleted: true, deletedAt: Date.now() } }, { new: true });
      let f = await blogModel.findOne({ deletedData }).select({ deletedAt: 1, isDeleted: 1, _id: 0 })
      return res.status(200).send({ status: true, msg: f });
    }
  }
  catch (err) {
    res.status(500).send({ status: false, msg: err.message });
  }
};

// exports all the function 
module.exports.createBlog = createBlog;
module.exports.getBlogs = getBlogs;
module.exports.updateBlog = updateBlog;
module.exports.deleteBlog = deleteBlog;
module.exports.deleteBlogByQuery = deleteBlogByQuery;
