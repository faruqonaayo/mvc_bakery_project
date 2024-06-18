// importing the product model
const Product = require("../models/product");

module.exports.getViewProduct = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("index", { prods: products, page: "home" });
  });
};

module.exports.getAddProduct = (req, res, next) => {
  res.render("add-product", { page: "add-product" });
};

module.exports.postAddProduct = (req, res, next) => {
  const prodNameInput = req.body.prodname;
  const prodImgInput = req.body.prodimg;
  const newProductObj = new Product(prodNameInput, prodImgInput);
  newProductObj.save();
  res.redirect("/");
};

module.exports.deleteProduct = (req, res, next) => {
    const productIndex = req.body.prodindex;
    Product.delete(productIndex);
    res.redirect("/");
}
