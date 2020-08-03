var express                     = require("express"),
    mongoose                    = require("mongoose"),
    passport                    = require("passport"),
    bodyParser                  = require("body-parser"),
    LocalStrategy               = require("passport-local"),
    passportLocalMongoose       = require("passport-local-mongoose"),
    User                        = require("./models/user");

mongoose.connect('mongodb://localhost:27017/AuthdemoDB', { useNewUrlParser: true, useUnifiedTopology: true });

var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
//run express session
app.use(require("express-session")({
    secret: "This is the secret!", //to encode and decode sessions
    resave: false,
    saveUninitialized: false
}));
//methods to set passport up
app.use(passport.initialize());
app.use(passport.session());
//important passport methods 
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.use(new LocalStrategy(User.authenticate()));
//==============
//routes
//==============
app.get("/", function(req, res){
    res.render("home");
});
app.get("/secret", isLoggedIn, function(req, res){
    res.render("secret");
});
//auth routes
//to show sign up form
app.get("/register", function(req, res){
    res.render("register");
});
//handling user sign up
app.post("/register", function(req, res){
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        //we dont actually save password in the db, we store the hash value
        if(err){
            console.log(err);
            return res.render('register');
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/secret");
        });
    });
});

//login routes
//render login form
app.get("/login", function(req, res){
    res.render("login");
});
//login logic
app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}) ,function(req, res){
});

app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

app.listen(3000, function(){
    console.log("Server has started!");
})