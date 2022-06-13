const { isValidObjectId } = require("mongoose")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

// Module - 3

const createBook= async function (req, res) {
    let book = req.body
    let authId = book.author_id
    let pubId = book.publisher_id
    if(authId  || pubId ){
        if(authId === isValidObjectId(authorModel) || pubId === isValidObjectId(publisherModel)){
            let bookCreated = await bookModel.create(book)
            res.send({data: bookCreated})
        }
        else{
            res.send("Author Id or PublisherId is not present.")
        }                       
    }
    else{
        res.send("Author Id or PublisherId is required")
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

// Module - 5
const updateBookSchema = async function (req, res) {
    let data = req.body
    let updateSchema = await bookModel.updateMany()
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksAuthorDetailsAndPubD = getBooksAuthorDetailsAndPubD
module.exports.updateBookSchema = updateBookSchema