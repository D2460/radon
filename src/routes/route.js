const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleWare = require("../middleware/auth")

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

router.get("/users/:userId", middleWare.mid1, middleWare.mid2, userController.getUserData)

router.post("/users/:userId/posts", middleWare.mid1, middleWare.mid2, userController.postMessage)

router.put("/users/:userId", middleWare.mid1, middleWare.mid2, userController.updateUser)

router.delete('/users/:userId', middleWare.mid1, middleWare.mid2 ,userController.deleteUserDetails)

module.exports = router;