var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var Comment = require("../models/comment");

//=========================================
//COMMENT ROUTES
//=========================================

//new route
router.get("/campgrounds/:id/comments/new", isLoggedIn, function(req, res){
    //find campground by id and send it to render page
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
        }
        else{
            res.render("comments/new", {campground: campground});
        }
    })
});

//create route
router.post("/campgrounds/:id/comments", isLoggedIn, function(req, res){
    //lookup campgrounds using id
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
            res.redirect("/campgrounds");
        }
        else{
            //create new comment ; we can use re.body.comment because in new.ejs of comment we gave name as comment[text] & comment[author]
            Comment.create(req.body.comment, function(err, comment){
                if(err){
                    console.log(err);
                }
                else{
                    campground.comments.push(comment);
                    campground.save();
                    res.redirect('/campgrounds/' + campground._id);
                }
            });
            //connect new comment to campground

            //redirect back to show page of campground

        }
    })
})

//middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;
