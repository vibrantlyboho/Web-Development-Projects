var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    Campground  = require("./models/campground"),
    seedDB      = require("./seeds"),
    Comment     = require("./models/comment");

mongoose.connect('mongodb://localhost:27017/Yelpcamp', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

seedDB();

//routes

app.get("/", function(req, res){
    res.render("landing");
});

//index route
app.get("/campgrounds", function(req, res){    
    //get all camp from db 
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        }
        else{
            res.render("campgrounds/index", {campgrounds: allCampgrounds});
        }
    }); 
});


//create route
app.post("/campgrounds", function(req, res){
    //get data from form & add to campgrounds array
    var name= req.body.name;
    var image= req.body.image;
    var desc= req.body.description;
    var newCampground= {name: name, image: image, description: desc};
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
app.get("/campgrounds/new", function(req, res){
    res.render("campgrounds/new");
});


//show route
app.get("/campgrounds/:id", function(req, res){
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

//=========================================
//COMMENT ROUTES
//=========================================

//new route
app.get("/campgrounds/:id/comments/new", function(req, res){
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
app.post("/campgrounds/:id/comments", function(req, res){
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


app.listen(3000, function(){
    console.log("YelpCamp Server has started!");
})