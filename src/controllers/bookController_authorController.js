const BookModel= require("../models/bookModel")
const AuthorModel = require("../models/authorModel")

const createNewBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const createAuthor= async function (req, res) {
    let data = req.body
    let allAuthor= await AuthorModel.create(data)
    res.send({msg: allAuthor})
}

const getBooksChatanBhagat = async function (req, res) {
    let authorId = await AuthorModel.find({author_name:"Chetan Bhagat"}).select({author_id:1, _id:0})
    let allBooks = await BookModel.find({result:1}).select({name:1, _id:0})
    console.log(authorId)
    res.send({msg:allBooks})
}

const getBooks_update = async function (req, res) {
    let data = req.body
    let bookUpdate = await BookModel.findOneAndUpdate({name:"Two states"},
    {$set:data},{new:true}).select({author_id:1,price:1,name:1,_id:0})
    let findId = await AuthorModel.find({author_id:2}).select({author_name:1, _id:0})
    res.send({msg:bookUpdate,findId})
}

const findAuthor = async function (req, res) {
    let findAuthorId = await BookModel.find({price:{$gt:50,$lt:100}}).select({author_id:1,_id:0})
    let findAuthorName = await AuthorModel.find({author_id:{$in:[1,2,3]}}).select({author_name:1,_id:0})
    console.log(findAuthorId)
    const result = findAuthorName.forEach(x => console.log(x))
    res.send({msg:findAuthorName})
}

module.exports.createNewBook = createNewBook
module.exports.createAuthor = createAuthor
module.exports.getBooksChatanBhagat = getBooksChatanBhagat
module.exports.getBooks_update = getBooks_update
module.exports.findAuthor = findAuthor