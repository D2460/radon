const express = require('express');
// const externalModule = require('./logger')
const externalModule1 = require("../logger/logger")
const externalModule2 = require("../util/helper")
const externalModule3 = require("../validator/formatter")
const underscore = require("underscore")
const router = express.Router();

router.get('/test-me', function (req, res) {
    externalModule1.val()
    externalModule2.Date1()
    externalModule2.Month2()
    externalModule2.BatchInfo()
    externalModule3.trim1()
    externalModule3.lowerCase()
    externalModule3.upperCase()
    let firstElement = underscore.first(["Dipen","Ajoy","Anita"])
    console.log("Arrays first element is: " + firstElement)
    res.send('My first ever api!')
});

// router.get('/test-me1', function (req, res) {
//     res.send('My second ever api!')
// });

// router.get('/test-me2', function (req, res) {
//     res.send('My third api!')
// });

// router.get('/test-me3', function (req, res) {
//     res.send('My 4th api!')
// });

// router.get('/test-me4', function (req, res) {
//     res.send('My last api!')
// });

module.exports = router;
// adding this comment for no reason