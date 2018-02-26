const express = require("express");
const router = express.Router();
const middlewares = require("../middlewares/index");

const Credentials = require("../controllers/credentials");
const ThirdPartyApi = require("../controllers/thirdpartyapi");
const API = require("../controllers/api");
const integrations = require("../controllers/integrations");



const {
    verifyCookie
} = middlewares;

const {
    signin,
    signup,
    resetPassword,
    newPassword
} = Credentials;

const {
    eventbrite:{
        search
    }
} = ThirdPartyApi;


const {
    saved,
    allSaveEvents
} = API;


const {
    github,
    githubToken,
    googleCalendar,
    google
} = integrations;

// Github Oauth 2
router.post("/authorize/github", github);
router.post("/token/github", githubToken);


router.post("/authorize/google", google);
router.post("/token/google", googleCalendar);



router.post("/signup", signup);

router.post("/signin", signin);

router.get("/eventbrite/search", search);

router.post("/resetpassword", resetPassword);

router.post("/newpassword", newPassword);

router.post("/saved", verifyCookie, saved);

router.get("/favorites", verifyCookie, allSaveEvents);




module.exports = router;