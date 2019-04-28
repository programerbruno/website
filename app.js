const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport    = require("passport");
const LocalStrategy = require("passport-local");
const Products = require("./models/products.js");
const User = require("./models/user.js")
const seedDB = require("./seeds.js");




mongoose.connect("mongodb://localhost/beekeping_website", {useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname));
app.use(express.static(__dirname + "/public"));

//Passport configuration
app.use(require("express-session")({
    secret:"this is a website to sell products for beekeeping",
    resave: false,
    saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Auth routes

//show register form
app.get("/register", function (req, res) {
    res.render("register.ejs");
});
//sign up logic
app.post("/register", function (req, res) {
    //this will get the user
   const newUser = new User({username: req.body.username});
   //this will get the password
    User.register(newUser, req.body.password, function (err, user) {
        if(err){
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function () {
            res.redirect("/");
        });
    });
});

//show login form
app.get("/login", function (req, res) {
   res.render("login");
});
//handling login logic
app.post("/login", passport.authenticate("local",
    {
        successRedirect: "/",
        failureRedirect: "/login"
    }), function (req, res) {
});

//logout route
app.get("/logout", function (req, res) {
   req.logout();
   res.redirect("/");
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("login");
}

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
