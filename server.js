var express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    env = require('dotenv').load(),
    secret = require("./back/config/secrets"),
    path = require("path"),
    webpack = require("webpack"),
    open = require("open");

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
// app.use(express.static(path.join(__dirname + "/app/public")));

//For BodyParser
app.use(bodyParser({ defer: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Models
var db = require("./back/models");


var html = require("./back/routes/html");
app.use("/", html);


var server;

//Sync Database
db.sequelize.sync({ force: true }).then(function() {
    console.log('Nice! Database looks fine');


    server = app.listen(PORT, function(err) {

        if (!err)
            console.log("Site is live");
        else console.log("Database started fine!!!");

    });

    open(`http://localhost:${PORT}`);

}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!");

});


module.exports =  server;
