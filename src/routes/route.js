const express = require('express');

const router = express.Router();

const CowinController= require("../controllers/cowinController")

router.get("/cowin/states", CowinController.getStates)

router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)

router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date

router.get("/cowin/getVaccination", CowinController.getVaccination)

router.get("/getWeatherReport", CowinController.getWeatherReport)

router.get("/citiesWeatherReportSort", CowinController.citiesWeatherReportSort)

router.get("/getMeme",CowinController.getMeme)

router.post("/meme", CowinController.memeHandler)





module.exports = router;