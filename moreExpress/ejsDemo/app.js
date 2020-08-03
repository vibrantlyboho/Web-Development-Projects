var express= require("express");
var app= express();

//telling express about public directory
app.use(express.static("public"));
//routes
app.get("/", function(req, res){
    res.render("home.ejs");
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing= req.params.thing;
    res.render("love.ejs", {thingVar: thing});
});


//serveris listening
app.listen(3000, function(){
    console.log("Server has started");
});