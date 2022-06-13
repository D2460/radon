const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const OrderController= require("../controllers/orderController")
const ProductController = require("../controllers/productController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.post("/createProduct", ProductController.createProduct)

router.post("/createUserNew",commonMW.mid1, UserController.createUser)

router.post("/createOrder", commonMW.mid1, OrderController.createOrder)

module.exports = router;