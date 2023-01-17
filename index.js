const express  = require('express');
const path = require("path");
const hbs = require("hbs");
const port = 3000;

const app = express();
// Assign public folder in express.static
const public = path.join(__dirname,"./public");
app.use(express.static(public));
app.set("view engine","hbs");
// Assign the index.hbs in views folder
const partialspath = path.join(__dirname+"/views");
hbs.registerPartials(partialspath);

// hbs for handle html codes and render the index.hbs in '/' opening page
app.use("/",require("./page/pages"));


app.listen(port,()=>{
    console.log("Server is listening port  " +`${port}`);
  });