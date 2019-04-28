const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Products = require("./models/products.js");
const seedDB = require("./seeds.js");




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
    Products.find({type:"alimento"}, function (err, selectProducts) {
        if(err){
            console.log(err);
        }else{
   res.render("products/food.ejs",{Products: selectProducts})
        }
    })
});

app.get("/colmeias", function (req, res) {
   Products.find({type: "colmeias"}, function (err, selectProducts) {
      if(err){
          console.log(err);
      } else {
    res.render("products/hive.ejs", {Products: selectProducts})
      }
   });
});

app.get("/embalagens", function (req, res) {
    Products.find({type: "embalagens"}, function (err, selectProducts) {
        if(err){
            console.log(err);
        } else {
            res.render("products/package.ejs", {Products: selectProducts})
        }
    });
});


app.listen(3000, function () {
    console.log("the Server has started");
});
