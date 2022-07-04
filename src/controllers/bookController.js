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
        if (mongoose.isValidObjectId(authId)) {
            if (pubId) {
                if (mongoose.isValidObjectId(pubId)) {
                    let author = await authorModel.findById(authId)
                    if (Object.keys(author).length!=0) {
                        let publisher = await publisherModel.findById(pubId)
                        if (Object.keys(publisher).length!=0) {
                            let allBooks = await bookModel.create(book)
                            res.send({ status: true, msg: allBooks })
                        }
                        res.send({ status: true, msg: "Publisher is not Present." })
                    }
                    res.send({ status: true, msg: "Author is not Present " })
                }
                res.send({ status: false, msg: "Publisher Id is Invaild." })
            }
            res.send({ status: false, msg: "Publisher Id is required." })
        }

        res.send({ status: false, msg: "Author Id is Invalid" })
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

// part-1
const updateBookSchema = async function (req, res) {
    let data = req.body
    let pubId = data.publisher_id
    if(pubId == "62a1d2bb04fd23ca6a38286e" || pubId =="62a2b14bfcf8aa7cc656b1e3"){
        let updateAllBooks = await bookModel.findOneAndUpdate({pubId}, { $set: { isHardCover: true } }, { new: true })
        res.send({status:true, newData:updateAllBooks})
    }
}

// part-2

const updateBooksPrice = async function (req, res) {
    let authorId = req.body.author_id
    let bookName = req.body.book_name
    let findBooksDetails = await bookModel.findOne({$and:[{bookName},{authorId}]}).populate("author_id")
        let authorRatings = findBooksDetails.author_id.author_ratings
        let bookPrice = findBooksDetails.price
        if(authorRatings > 3.5){
            let updateBookPrice = await bookModel.findOneAndUpdate({bookName},{$set:{price:(bookPrice+10)}},{new:true})
            return res.send({status:true, newData:updateBookPrice})
        }
        res.send({msg:"No author present in more than 3.5 ratings"})
    
}

module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.getBooksAuthorDetailsAndPubD = getBooksAuthorDetailsAndPubD
module.exports.updateBookSchema = updateBookSchema
module.exports.updateBooksPrice = updateBooksPrice