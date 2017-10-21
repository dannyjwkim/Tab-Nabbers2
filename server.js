const express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    env = require('dotenv').load(),
    secret = require("./back/config/secrets"),
    path = require("path"),
    webpack = require("webpack"),
    open = require("open"),
    passport = require("passport"),
    mongoose = require('mongoose'),
    {TEST_DATABASE_URL} = require('./back/config/mongo'),
    countAndCreateUser = require('./back/db/seedUser');
  

    mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/boocruitusers');






const config = require("./webpack.config");


require('./back/passport')(passport);

const app = express(),
    PORT = process.env.PORT || 8080;


const router = express.Router();

const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo:true,
    publicPath:config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));


// // Static directory
app.use(express.static(path.join(__dirname + "/front/public")));


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
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());




/**
 * Bootcruit Routes
 * Authenticate, API, and Browser routes
 */
require("./back/routes/authenticate")(app, passport);
require("./back/routes/meetup")(app, path);
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
        console.log('Server errored, mongoose disconnecting.');
        reject(err);
      });
  });
    
});

const db = mongoose.connection;


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


