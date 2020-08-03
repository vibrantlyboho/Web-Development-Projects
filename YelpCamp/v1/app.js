var express= require("express");
var app= express();
var bodyParser= require("body-parser");
var campgrounds=[
    {name: "Salmon Creek", image: "https://api.creativecommons.engineering/t/600/https://farm9.staticflickr.com/8003/28660877652_56f7af6fc1_m.jpg"},
    {name: "Granite Hill", image: "https://api.creativecommons.engineering/t/600/https://farm9.staticflickr.com/8745/28660881602_2abf1312ca_m.jpg"},
    {name: "Kulu Manali", image: "https://api.creativecommons.engineering/t/600/https://live.staticflickr.com/8128/28481924680_d65a9655c2_m.jpg"}
];   

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
//routes
app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){    
    res.render("campgrounds", {campgrounds: campgrounds}); 
});

app.post("/campgrounds", function(req, res){
    //get data from form & add to campgrounds array
    var name= req.body.name;
    var image= req.body.image;
    var newCampground= {name: name, image: image};
    campgrounds.push(newCampground);
    //redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new");
});

app.listen(3000, function(){
    console.log("YelpCamp Server has started!");
})