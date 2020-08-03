var express= require("express");
var app= express();

//Routes
// "/"- hi there
app.get("/", function(req, res){
    res.send("Hi there!!");
});
// tell express to listen for requests (start server)
    app.listen(3000, function(){
        console.log("Server has started");
    });

// "/bye"
    app.get("/bye", function(req, res){
        res.send("Goodbye!!");
    });
// "/dog"
    app.get("/dog", function(req, res){
        console.log("someone made a request!!");
        res.send("BOW BOW");
    });

    //
    app.get("*", function(req, res){
        res.send("No such route available!");
    });