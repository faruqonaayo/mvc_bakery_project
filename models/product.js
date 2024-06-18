// importing node core modules
const fs = require("fs");
const path = require("path");

module.exports = class Product {
  constructor(n, i) {
    this.name = n;
    this.image = i;
  }

  save() {
    const dataPath = path.join(
      path.dirname(require.main.filename),
      "data",
      "productData.json"
    );
    fs.readFile(dataPath, (err, fileContent) => {
      let productsArray = [];
      if (!err) {
        // what happens if the file already exists
        productsArray = JSON.parse(fileContent);
      }
      productsArray.push(this);

      fs.writeFile(dataPath, JSON.stringify(productsArray), (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  }

  // a static method can be called directry from the class without having to create a dummy instance of class
  static fetchAll(cb) {
    const dataPath = path.join(
      path.dirname(require.main.filename),
      "data",
      "productData.json"
    );

    fs.readFile(dataPath, (err, fileContent) => {
      if (!err) {
        // what happens if the file already exists
        return cb(JSON.parse(fileContent));
      }else{
        return cb([]);
      }
    });
  }
};
