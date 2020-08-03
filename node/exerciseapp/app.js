var express= require("express");
var app= express();

// for home page
app.get("/", function(req, res){
    res.send("Hi there!! Welcome to my assignment");
});

//listen
app.listen(3000, function(){
    console.log("Server has started");
});

// animal sounds
app.get("/speak/:animal", function(req, res){
    var animal= req.params.animal;
    var sounds={
        pig: "Oink",
        cow: "Moo",
        dog: "Bow Bow", 
        cat: "Meow meow"
    };
    var sound=sounds[animal]
    res.send("The "+ animal + " says "+ sound);
});

//repeat
app.get("/repeat/:word/:num", function(req, res){
    var word= req.params.word;
    var num= Number(req.params.num);
    var tosend= "";
    for(var i=0; i<num; i++){
      tosend += word + " ";
    }
    res.send(tosend);
});

//catch
app.get("*", function(req, res){
    res.send("What are you doing with your life?");
})