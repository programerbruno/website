const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/beekeping_website", {useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

//routes index
app.get("/", function (req, res) {
   res.send("this is a teshht");
});





app.listen(3000, function () {
   console.log("the Server has started");
});
