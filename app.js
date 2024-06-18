// importing core modules
const path = require('path');
// importing 3rd party modules
const express = require("express");
const bodyParser = require('body-parser');

// creating the express app
const app = express();
const port = 3000;


// setting our templating engine and views folder
app.set('view engine', 'ejs');
app.set('views', 'views');

// importing the admin router
const adminRouter = require('./routes/admin');

// showing that our static file is in the public folder
app.use(express.static("public"));

// using the bodyParser middleware
app.use(bodyParser.urlencoded({extended: true}));


// using the routers as middleware
app.use(adminRouter);



app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
