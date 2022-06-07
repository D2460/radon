const express = require('express');
const moment = require("moment")
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)

router.post("/updateBooks", BookController.updateBooks)

router.post("/deleteBooks", BookController.deleteBooks)

router.get("/dateManupulation",function (req,res) {
     const today = moment()
     console.log(today.format("DD-MM-YY"))
     let validOrNot = moment("15-03-1996","DD-MM-YY").isValid()
     console.log(validOrNot)
     res.send({msg:"all good"})    
})

module.exports = router;