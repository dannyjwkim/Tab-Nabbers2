const express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    env = require('dotenv').load(),
    secret = require("./back/config/secrets"),
    path = require("path"),
    webpack = require("webpack"),
    passport = require("passport"),
    mongoose = require('mongoose'),
    {TEST_DATABASE_URL} = require('./back/config/mongo'),
    countAndCreateUser = require('./back/db/seedUser'),
    flash = require("express-flash"),
    MongoStore = require('connect-mongo')(session);
  

mongoose.Promise = global.Promise;

mongoose.connect(TEST_DATABASE_URL.url);


const db = mongoose.connection;

const config = require("./webpack.config");


require('./back/passport')(passport);

const app = express(),
    PORT = process.env.PORT || 8080;


const compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo:true,
    publicPath:config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));


app.use(express.static(path.join(__dirname + "/front/public"))); // static folders




/**
 * Configure Express Middleware
 * Such as body-parser, express-session, passport,
 */
app.use(bodyParser({ defer: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./back/passport")(passport);



app.use(session({
    secret: 'ilovescotchscotchyscotchscotch', // session secret
    resave: false,
    saveUninitialized: false,
    store:new MongoStore({mongooseConnection: db})
}));
// app.use(flash());
app.use(passport.initialize());
app.use(passport.session());



/**
 * Bootcruit Routes
 * Authenticate, API, and Browser routes
 */
require("./back/routes/authenticate")(app, passport);
require("./back/routes/api")(app, path);
require("./back/routes/html")(app, path);



/**
 * Server starting
 */
let server;

let runServer = ((port = PORT) => {
    return new Promise((resolve, reject) => {
        server = app.listen(port, () => {
            console.log(`Your app is listening on port ${port}`);
            resolve(server);
        })
            .on('error', err => {
                console.log('Server error, mongoose disconnecting.');
                reject(err);
            });
    });

});




runServer()
    .then(() => {
        db.once("open", function () {
            console.log("Mongoose connection successful!!!");
            countAndCreateUser();
        });

    })
    .catch( (err) => {
        console.log('server not running', err);
        db.on("error", function (err) {
            console.log("Mongoose Error: ", err);
        });
    });


