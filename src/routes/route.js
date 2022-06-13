const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const OrderController= require("../controllers/orderController")
const ProductController = require("../controllers/productController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.post("/createProduct", ProductController.createProduct)

router.post("/createUser", UserController.createUser)

module.exports = router;