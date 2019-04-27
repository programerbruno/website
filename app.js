const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/beekeping_website", {useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname));
app.use(express.static(__dirname + "/public"));

//routes index
app.get("/", function (req, res) {
    res.render("index.ejs");
});

app.get("/quem-somos", function (req, res) {
   res.render("about.ejs");
});
app.get("/contactos", function (req, res) {
   res.render("contacts.ejs");
});

app.get("/alimento", function (req, res) {
   res.render("food.ejs")
});



app.listen(3000, function () {
    console.log("the Server has started");
});
