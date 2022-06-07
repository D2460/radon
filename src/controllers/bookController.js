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
    let data = req.body.year
    let allBooks = await BookModel.find({year:data})
    res.send({msg:allBooks})
}

const getParticularBooks = async function (req, res) {
    let data = req.body
    let allBooks = await BookModel.find(data)
    res.send({msg:allBooks})
}

const getXINRBooks = async function (req, res) {
    let price = req.body.price
    let allBooks = await BookModel.find({"price[indianPrice]":{$in:["Rs. 100","Rs. 200","Rs. 500"]}})
    res.send({msg:allBooks})
}

const getRandomBooks = async function (req, res) {
    let allBooks = await BookModel.find({$or:[{stockAvailable:true},{totalPage:{$gt:"500"}}]})
    res.send({msg:allBooks})
}

// const getBooksData= async function (req, res) {
//     let page = req.query.page
//     // let allBooks= await BookModel.find({$or:[{authorName:"PK"}, {isPublished:true},{year:1991}]})  //.count()
//     // let allBooks = await BookModel.find().sort({sales:-1}).skip(3 * (page - 1)).limit(3)
//     // In skip page it has 3 element in page.
//     // let allBooks = await BookModel.find().sort({sales:-1}).skip(3 * (page - 1)).limit(3).select({bookName:1,authorName:1,_id:0})
//     // let allBooks = await BookModel.find({authorName:{$eq:"PK"}})
//     // let allBooks = await BookModel.find({sales:{$gt:50}})
//     // let allBooks = await BookModel.find({sales:{$lt:50}})
//     // let allBooks = await BookModel.find({sales:{$ne:10}})
//     // let allBooks = await BookModel.find({sales:{$gte:10}})
//     // let allBooks = await BookModel.find({sales:{$in:[10,15,90]}}) // There are atleast one element match of this array($in)
//     // let allBooks = await BookModel.find({sales:{$nin:[10,15,90]}}).select({sales:1,_id:0})  //$nin-not in an array.
//     // let allBooks = await BookModel.find({ sales:{$gt:20, $lt:100} })
    
//     // let allBooks = await BookModel.findOne({sales:10}) // find atlest one book
//     // console.log(allBooks)
    
//     // let allBooks = await BookModel.update({sales:{$gt:10}},  //update in post request 
//     // {$set:{isPublished:false}})
    
//     // REGEX
//     // let allBooks = await BookModel.find({bookName: /^Int/})  // start from 'Int'
//     // let allBooks = await BookModel.find({bookName: /9$/})    // end with 9
//     let allBooks = await BookModel.find({bookName: /.*programming.*/i})  // find all books in programming, i = rest of element ignoring
//     res.send({msg: allBooks})
// }

module.exports.createBook= createBook
module.exports.bookList = bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks