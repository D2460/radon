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
    let allBooks = await BookModel.find({author_id:authorId[0].author_id}).select({name:1, _id:0})
    console.log(authorId)
    res.send({msg:allBooks})
}

const getBooks_update = async function (req, res) {
    let data = req.body
    let bookUpdate = await BookModel.findOneAndUpdate({name:"Two states"},
    {$set:data},{new:true}).select({author_id:1,price:1,name:1,_id:0})
    let findId = await AuthorModel.find({author_id:bookUpdate.author_id}).select({author_name:1, _id:0})
    res.send({msg:bookUpdate,findId})
}

const findAuthor = async function (req, res) {
    let findAuthorId = await BookModel.find({price:{$gt:50,$lt:100}}).select({author_id:1,_id:0})
    let findAuthorName = await AuthorModel.find({author_id:{$in:[findAuthorId[0].author_id,findAuthorId[1].author_id,findAuthorId[2].author_id]}}).select({author_name:1,_id:0})
    console.log(findAuthorId)
    const result = findAuthorName.forEach(x => console.log(x))
    res.send({msg:findAuthorName})
}

const Show_book = async function (req, res) {
    let data = req.params.Id
    if(data ==="1" || data ==="2" || data ==="3"){
        let allBooks = await BookModel.find({author_id:data}).select({name:1,_id:0})
        console.log(allBooks)
        res.send({msg:allBooks})
    }
    else{
        res.send("No data Exists with this id.")
    }
}

const authorNameAndAge = async function (req, res) {
    let authorAge = await AuthorModel.find({age:{$gt:50}}).select({author_id:1, author_name:1,age:1,_id:0})
    let findRating = await BookModel.find({author_id:{$in:[authorAge[0].author_id,authorAge[1].author_id]}, ratings:{$gt:4} }).select({name:1,author_id:1,ratings:1,_id:0})
    let a = authorAge[0].author_name
    let b = authorAge[0].age
    let c = authorAge[1].author_name
    let d = authorAge[1].age
    console.log(authorAge)
    console.log(findRating)
    res.send({msg:{"AuthorName1":a,"ageOfAuthor1":b,"AuthorName2":c,"ageOfAuthor2":d}}) 
}
module.exports.createNewBook = createNewBook
module.exports.createAuthor = createAuthor
module.exports.getBooksChatanBhagat = getBooksChatanBhagat
module.exports.getBooks_update = getBooks_update
module.exports.findAuthor = findAuthor
module.exports.Show_book = Show_book
module.exports.authorNameAndAge = authorNameAndAge