var express     = require("express");
var app         = express();
var bodyParser  = require("body-parser");
var mongoose    = require("mongoose");

mongoose.connect('mongodb://localhost:27017/Yelpcamp', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


//SCHEMA SETUP
var campgroundSchema= new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

/*
Campground.create(
    {
        name: "Granite Hill", 
        image: "https://api.creativecommons.engineering/t/600/https://farm9.staticflickr.com/8745/28660881602_2abf1312ca_m.jpg",
        description: "This is a huge, beautiful granite hill"
    }, function(err, campground)
    {
        if(err){
            console.log(err);
        }
        else{
            console.log("New CampGround!!");
            console.log(campground);
        }
    }
);
*/

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
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        }
        else{
            //render show template with that campground
            res.render("show", {campground: foundCampground});
        }
    });
    
});

app.listen(3000, function(){
    console.log("YelpCamp Server has started!");
})