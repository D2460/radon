const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleWare = require("../middleWare/auth")

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

router.get("/users/:userId", middleWare.Authenticate, middleWare.Authorization, userController.getUserData)

router.put("/users/:userId", middleWare.Authenticate, middleWare.Authorization, userController.updateUser)

router.post("/users/:userId/posts", middleWare.Authenticate, middleWare.Authorization, userController.postMessage)

router.delete("/users/:userId", middleWare.Authenticate, middleWare.Authorization, userController.deleteUserDetails)

module.exports = router;
