const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController = require("../controllers/publisherController")

router.post("/createAuthor-1", authorController.createAuthor)

router.post("/createBook-1", bookController.createBook)

router.post("/createPublisher", publisherController.createPublisher)

router.get("/getAuthorsData", authorController.getAuthorsData)

router.get("/getBooksData", bookController.getBooksData)

router.get("/getPublishersData", publisherController.getPublishersData)

router.get("/getBooksWithAuthorDetailsAndPubDe", bookController.getBooksAuthorDetailsAndPubD)

module.exports = router;