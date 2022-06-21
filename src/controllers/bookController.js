const mongoose = require("mongoose")
const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

// Module - 3

const createBook = async function (req, res) {
    let book = req.body
    let authId = book.author_id
    let pubId = book.publisher_id
    if (authId) {
        if (pubId) {
            let author = await authorModel.findById(authId)
            let publisher = await publisherModel.findById(pubId)
            if (author) {
                if (publisher) {
                    let allBooks = await bookModel.create(book)
                    res.send({ status: true, msg: allBooks })
                }
                res.send({ status: true, msg: "Publisher is not Present." })
            }
            res.send({ status: true, msg: "Author is not Present " })
        }
        res.send({ status: false, msg: "Publisher Id is required." })

    }
    res.send({ status: false, msg: "Author Id is required" })
}

const getBooksData = async function (req, res) {
    let books = await bookModel.find()
    res.send({ data: books })
}

// Module - 4

const getBooksAuthorDetailsAndPubD = async function (req, res) {
    let specificBook = await bookModel.find().populate(['author_id', 'publisher_id'])
    res.send({ data: specificBook })

}

// Module - 5
const updateBookSchema = async function (req, res) {
    let data = req.body
    let pubId = data.publisher_id
    let updateAllBooks = await bookModel.findByIdAndUpdate({pubId:{_id:"62a1d2bb04fd23ca6a38286e",_id:"62a2b14bfcf8aa7cc656b1e3"}},{$set:{isHardCover:true}},{new:true})
}

module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.getBooksAuthorDetailsAndPubD = getBooksAuthorDetailsAndPubD
module.exports.updateBookSchema = updateBookSchema