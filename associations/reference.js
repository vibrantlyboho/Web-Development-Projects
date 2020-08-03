var mongoose= require("mongoose");
mongoose.connect('mongodb://localhost:27017/blog_demo_2', { useNewUrlParser: true, useUnifiedTopology: true });

var Post= require("./models/post");
var User= require("./models/user");
/*
    User.create({
        email: "bo@gmail.com",
        name: "Bo"
    });
*/

/*
    Post.create({
        title:"Playyyy",
        content:"Have Funnnn!!!!!!"
    }, function(err, post){
        User.findOne({email: "bo@gmail.com"}, function(err, foundUser){
            if(err){
                console.log(err);
            } else{
                foundUser.posts.push(post);
                foundUser.save(function(err, data){ 
                    if(err){
                        console.log(err);
                    } else{
                        console.log(data);
                    } 
                });
            }
        });
    });
*/

/*
User.findOne({email: "bo@gmail.com"}).populate("posts").exec(function(err, user){
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }
});
*/