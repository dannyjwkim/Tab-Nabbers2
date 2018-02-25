const express = require("express");
const router = express.Router();

const Credentials = require("../controllers/credentials");
const Middleware = require("../middlewares");
const API = require("../controllers/thirdpartyapi");

const {
    signin,
    signup,
    resetPassword,
    newPassword,
} = Credentials;

const {
    verifyCookie
} = Middleware;

const {
    eventbrite:{
        search
    }
} = API;


router.post("/signup", signup);

router.post("/signin", signin);

router.get("/eventbrite/search", verifyCookie, search);

router.post("/resetpassword", resetPassword);

router.post("/newpassword", newPassword);



module.exports = router;