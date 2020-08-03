var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    methodOverride  = require("method-override");
    expressSanitizer= require("express-sanitizer");

//app config
//Required for every app
mongoose.connect('mongodb://localhost:27017/Restful_BlogApp', { useNewUrlParser: true, useUnifiedTopology: true });
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(expressSanitizer());

//Schema
//mongoose/model config
var blogSchema = new mongoose.Schema({
     title: String,
     image: String,
     body: String,
     created: {type: Date, default: Date.now}
});
var Blog= mongoose.model("Blog", blogSchema);

//to check if db is connected
/*    Blog.create({
        title: "Camping we will go!!",
        image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
        body: "Its great to go camping"
    });
*/

//restful routes
app.get("/", function(req, res){
    res.redirect("/blogs");
});

//index
app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log("ERROR!!");
        }else{
            res.render("index", {blogs: blogs});
        }
    });
});

//new
app.get("/blogs/new", function(req, res){
    res.render("new");
});

//create
app.post("/blogs", function(req, res){
    //create blog
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.create(req.body.blog, function(err, newBlog){
        if(err){
            res.render("new");
        } else{
            //redirect
            res.redirect("/blogs");
        }
    });
});

//show
app.get("/blogs/:id", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        }else{
            res.render("show", {blog: foundBlog});
        }
    });    
});

//edit
app.get("/blogs/:id/edit", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        }else{
            res.render("edit", {blog: foundBlog});
        }
    });
});

//update
app.put("/blogs/:id", function(req, res){
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
        if(err){
            res.redirect("index");
        }else{
            res.redirect("/blogs/" + req.params.id);
        }
    });
})

//destroy
app.delete("/blogs/:id", function(req, res){
    //destroy blog
    Blog.findByIdAndDelete(req.params.id, function(err){
        if(err){
            res.redirect("/blogs");
        }else{
            res.redirect("/blogs");
        }
    })
    //redirect
});

app.listen(3000, function(){
    console.log("Server is running!");
})