var express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    env = require('dotenv').load(),
    secret = require("./back/config/secrets"),
    path = require("path"),
    webpack = require("webpack"),
    open = require("open"),
    passport = require("passport"),
    session = require('express-session');

var config = require("./webpack.config");

var app = express(),
    PORT = process.env.PORT || 8080;

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


app.use(session({
    secret: 'ilovescotchscotchyscotchscotch', // session secret
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

//Models
var db = require("./back/models");

var authenticate = require("./back/routes/authenticate");

app.use("/authenticate", authenticate);

var html = require("./back/routes/html");
app.use("/", html);




//Sync Database
db.sequelize.sync({  }).then(function() {
    console.log('Nice! Database looks fine');


    app.listen(PORT, function(err) {

        if (!err)
            console.log("Site is live");
        else console.log("Database started fine!!!");

    });

    //open(`http://localhost:${PORT}`);

}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!");

});

