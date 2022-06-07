const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const bookList = async function (req, res) {
    let allBooks = await BookModel.find().select({bookName:1, authorName:1, _id:0})
    res.send({msg:allBooks})
}

const getBooksInYear = async function (req, res) {
    let data = req.body
    let allBooks = await BookModel.find()
}

const getBooksData= async function (req, res) {
    let page = req.query.page
    // let allBooks= await BookModel.find({$or:[{authorName:"PK"}, {isPublished:true},{year:1991}]})  //.count()
    // let allBooks = await BookModel.find().sort({sales:-1}).skip(3 * (page - 1)).limit(3)
    // In skip page it has 3 element in page.
    // let allBooks = await BookModel.find().sort({sales:-1}).skip(3 * (page - 1)).limit(3).select({bookName:1,authorName:1,_id:0})
    // let allBooks = await BookModel.find({authorName:{$eq:"PK"}})
    // let allBooks = await BookModel.find({sales:{$gt:50}})
    // let allBooks = await BookModel.find({sales:{$lt:50}})
    // let allBooks = await BookModel.find({sales:{$ne:10}})
    // let allBooks = await BookModel.find({sales:{$gte:10}})
    // let allBooks = await BookModel.find({sales:{$in:[10,15,90]}})
    // let allBooks = await BookModel.find({sales:{$nin:[10,15,90]}}).select({sales:1,_id:0})
    // let allBooks = await BookModel.find({ sales:{$gt:20, $lt:100} })
    
    // let allBooks = await BookModel.findOne({sales:10})
    // console.log(allBooks)
    
    // let allBooks = await BookModel.update({sales:{$gt:10}},
    // {$set:{isPublished:false}})
    
    // REGEX
    // let allBooks = await BookModel.find({bookName: /^Int/})
    // let allBooks = await BookModel.find({bookName: /9$/})
    let allBooks = await BookModel.find({bookName: /.*programming.*/i})
    res.send({msg: allBooks})
}

module.exports.createBook= createBook
module.exports.bookList = bookList