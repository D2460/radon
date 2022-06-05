const express = require('express');
const userController = require("../controllers/userControllers")
const router = express.Router();

router.get('/hello', userController.a);

router.get('/hello2', userController.b)

router.get('/hello3', userController.c)

router.get('/hello4', userController.d)

router.get('/test-me', userController.test1);

router.get('/candidate', userController.Query1);

router.get('/candidate/:name', userController.body1);

router.get('/sol1', userController.Missing2);

router.get('/missingNum', userController.MissingNumSol2);

router.get('/missing', userController.missingNumber);

router.get('/sol2', userController.MissingNum);

router.get('/getUsersData', userController.getUsersData);

router.post('/createUser', userController.createUser);

router.post('/Dipen', userController.test2);

router.post('/players', userController.AddName);
  
router.post('/test-post-4', userController.print1);

module.exports = router;
