var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/DemoTest', { useNewUrlParser: true, useUnifiedTopology: true });

var DogSchema= new mongoose.Schema({
    name: String,
    age: Number,
    breed: String
});

var Dog= mongoose.model("Dog", DogSchema);

//adding new dog to db
/*    var lulu= new Dog({
        name: "GG",
        age: 6,
        breed: "Mutt"
    });

    lulu.save(function(err, dog){
        if(err){
            console.log("Something is wrong!!");
        }
        else{
            console.log("Saved!!");
            console.log(dog);
        }
    });
*/

//adding using .create
Dog.create({
    name:"MM",
    age: 15,
    breed: "German Shepherd"}, function(err, dog){
        if(err)
        {
            console.log("Eroor!");
        }
        else{
            console.log(dog);
        }
    })

//retrieving cats from db
Dog.find({}, function(err, dog){
    if(err){
        console.log("oh no!!!");
        console.log(err);
    }
    else{
        console.log("all dogs!!");
        console.log(dog);
    }
})