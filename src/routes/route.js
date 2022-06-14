const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleWare = require("../middleWare/auth")

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

router.get("/users/:userId", middleWare.mid1, userController.getUserData)

router.put("/users/:userId", middleWare.mid1, userController.updateUser)

router.delete("/users/:userId", middleWare.mid1, userController.deleteUserDetails)

module.exports = router;