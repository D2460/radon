const express = require('express');
const router = express.Router();
const Controller= require("../controllers/bookController_authorController")

router.post("/createAuthor", Controller.createAuthor)

router.post("/createNewBook", Controller.createNewBook)

router.post("/getBooks_update", Controller.getBooks_update)

router.get("/getBooksChatanBhagat", Controller.getBooksChatanBhagat)

router.get("/findAuthor", Controller.findAuthor)

module.exports = router;