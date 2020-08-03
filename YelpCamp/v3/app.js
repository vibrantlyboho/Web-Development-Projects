var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    Campground  = require("./models/campground"),
    seedDB      = require("./seeds");

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
            res.render("index", {campgrounds: allCampgrounds});
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
    res.render("new");
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
            res.render("show", {campground: foundCampground});
        }
    });
    
});

app.listen(3000, function(){
    console.log("YelpCamp Server has started!");
})