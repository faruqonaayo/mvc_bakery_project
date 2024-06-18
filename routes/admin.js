// importing 3rd party modules
const express = require("express");

// importing products controllers
const productsControllers = require('../controllers/products');

// creating the router app
const router = express.Router();

// handling of user request through router
router.get("/", productsControllers.getViewProduct);

router.get("/add-product", productsControllers.getAddProduct);

router.post("/add-product", productsControllers.postAddProduct);

// exporting the router 
module.exports = router;