var mongoose= require("mongoose");
mongoose.connect('mongodb://localhost:27017/blog_demo', { useNewUrlParser: true, useUnifiedTopology: true });


//post-title, content
var postSchema= new mongoose.Schema({
    title: String,
    content: String
});

var Post= mongoose.model("Post", postSchema);

//user model- email, name
var userSchema= new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User= mongoose.model("User", userSchema);

/*
    var newUser= new User({
        email: "Her@gmail.com",
        name: "Her"
    });

    newUser.posts.push({
        title: "Heyyo",
        content:"Thissss!!!!!!!!!!!1"
    });

    newUser.save(function(err, user){
        if(err){
            console.log(err);
        }
        else{
            console.log(user);
        }    
    });


    var newPost= new Post({
        title: "QWERTY",
        content: "shfkjwfjehf"
    });

    newPost.save(function(err, post){
        if(err){
            console.log(err);
        }
        else{
            console.log(post);
        }    
    });
*/

User.findOne({name: "Her"}, function(err, user){
    if(err){
        //console.log(err);
    }
    else{
        user.posts.push({
            title: "Cool!!",
            content: "FANTASTIC"
        });
        user.save(function(err, user){
            if(err){
                console.log(err);
            }
            else{
                console.log(user);
            }    
        });
    }    
});