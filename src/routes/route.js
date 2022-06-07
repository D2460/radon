const express = require('express');
const router = express.Router();
const Controller= require("../controllers/bookController_authorController")

router.post("/createUser", Controller.createAuthor)

router.post("/createNewBook", Controller.createNewBook)

module.exports = router;