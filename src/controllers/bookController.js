const { isValidObjectId } = require("mongoose")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

// Module - 3

const createBook= async function (req, res) {
    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}
const isPresentOrValidId = async function(req,res){
    let authId = book.author_id
    let pubId = book.publisher_id
    if(authId > 0){
        if(authId === isValidObjectId(authorModel) && pubId === isValidObjectId(publisherModel)){
           
        }
        else{
            res.send("Author Id is not present.")
        }                       
    }
    else{
        res.send("Author Id is required")
    }

}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

// const isValidAuthId = async function

// Module - 4

const getBooksAuthorDetailsAndPubD = async function (req, res) {
    let specificBook = await bookModel.find().populate(['author_id','publisher_id'])
    res.send({data: specificBook})

}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksAuthorDetailsAndPubD = getBooksAuthorDetailsAndPubD
