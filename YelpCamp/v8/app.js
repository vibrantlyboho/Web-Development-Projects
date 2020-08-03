var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    passport    = require("passport"),
    LocalStrategy = require("passport-local"),
    Campground  = require("./models/campground"),
    seedDB      = require("./seeds"),
    User        = require("./models/user"),
    Comment     = require("./models/comment");

//requiring routes
var commentRoutes = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    authRoutes = require("./routes/index");

mongoose.connect('mongodb://localhost:27017/Yelpcamp', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname +"/public"));


//seedDB(); //seed the database

//passport configuration
app.use(require("express-session")({
    secret: "Once upon a time",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//middleware to see if user logged in or not
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});

//using routes
app.use(authRoutes);
app.use(campgroundRoutes);
app.use(commentRoutes);

app.listen(3000, function(){
    console.log("YelpCamp Server has started!");
})