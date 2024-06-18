// importing the product model
const Product = require('../models/product')

module.exports.getViewProduct = (req, res, next) => {
    Product.fetchAll(products => {
       res.render("index", {prods: products}); 
    })
};

module.exports.getAddProduct = (req, res, next) => {
    res.render("add-product");
};

module.exports.postAddProduct = (req, res, next) => {
    const prodNameInput = req.body.prodname;
    const prodImgInput = req.body.prodimg;
    const newProductObj = new Product(prodNameInput,prodImgInput)
    newProductObj.save();
    res.redirect("/");
}
