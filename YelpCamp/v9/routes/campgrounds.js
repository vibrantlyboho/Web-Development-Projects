var express = require("express");
var router = express.Router();
var Campground= require("../models/campground");
//===============
//CAMPGROUND ROUTES
//================

router.get("/", function(req, res){
    res.render("landing");
});

//index route
router.get("/campgrounds", function(req, res){    
    //get all camp from db 
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        }
        else{
            res.render("campgrounds/index", {campgrounds: allCampgrounds, currentUser: req.user});
        }
    }); 
});


//create route
router.post("/campgrounds", isLoggedIn,function(req, res){
    //get data from form & add to campgrounds array
    var name= req.body.name;
    var image= req.body.image;
    var desc= req.body.description;
    var author= {
        id: req.user._id,
        username: req.user.username
    };
    var newCampground= {name: name, image: image, description: desc, author: author};
    //create new campground and save to db
    Campground.create(newCampground, function(err, newlycreated){
        if(err){
            console.log(err);
        }
        else{
            //redirect back to campgrounds page
            res.redirect("/campgrounds");
        }
    });  
});


//new route
router.get("/campgrounds/new", isLoggedIn,function(req, res){
    res.render("campgrounds/new");
});


//show route
router.get("/campgrounds/:id", function(req, res){
    //find campground with :id
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        }
        else{
            console.log(foundCampground);
            //render show template with that campground
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
    
});


//middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;