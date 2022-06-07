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

module.exports.createNewBook = createNewBook
module.exports.createAuthor = createAuthor