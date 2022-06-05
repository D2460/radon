const express = require('express');
const userController = require("../controllers/userControllers")
const router = express.Router();

router.get('/movies', userController.h);

router.get('/movies/:indexNumber', userController.k);

router.get('/films', userController.m);

router.get('/films/:filmId', userController.w);

module.exports = router;
