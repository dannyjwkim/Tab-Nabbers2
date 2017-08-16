var express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    env = require('dotenv').load(),
    secret = require("./back/config/secrets"),
    path = require("path"),
    webpack = require("webpack"),
    open = require("open"),
    passport = require("passport"),
    mongoose = require('mongoose');



mongoose.connect('mongodb://localhost/sequelize_passport');


var db = mongoose.connection;

db.on("error", function (err) {
    console.log("Mongoose Error: ", err);
});

db.once("open", function () {
    console.log("Mongoose connection successful!!!");
});



var config = require("./webpack.config");


require('./back/passport')(passport);

var app = express(),
    PORT = process.env.PORT || 8080;


var router = express.Router();

var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo:true,
    publicPath:config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));


// // Static directory
app.use(express.static(path.join(__dirname + "/app/public")));

//For BodyParser
app.use(bodyParser({ defer: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./back/passport")(passport);

app.use(session({
    secret: 'ilovescotchscotchyscotchscotch', // session secret
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());


require("./back/routes/authenticate")(app, passport);


//Sync Database
app.listen(PORT, function(err) {

    if (!err)

        console.log("Site is live");
    else console.log("Database started fine!!!");

});
