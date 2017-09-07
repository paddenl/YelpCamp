var express = require("express"),
    router = express.Router(),
    User = require("../models/user"),
    passport = require("passport");

// route param for landing page
router.get("/", function(req, res) {
   res.render("landing"); 
});


//============
// AUTH ROUTES
//============

router.get("/register", function(req, res) {
   res.render("register");
});

// handles signup logic
router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            req.flash("error", err.message);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
           req.flash("success", "welcome to yelpcamp " + user.username);
           res.redirect("/campgrounds/"); 
        });
    });
});

//============
// LOGIN ROUTES
//============

//show login form
router.get("/login", function(req, res){
   res.render("login");
});

//handles login logic
router.post("/login", passport.authenticate("local", 
{
   successRedirect: "/campgrounds/", 
   failureRedirect: "/login"
   
}), function(req, res){
   
});

//============
// LOGOUT ROUTES
//============
router.get("/logout", function(req, res) {
   req.logout();
   req.flash("success", "logged you out!");
   res.redirect("/campgrounds/");
});



module.exports = router;