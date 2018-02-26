
const jwt = require("jsonwebtoken");

module.exports = {
    verifyCookie: (req, res, next) => {
        const token = req.cookies["token"];

        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if(err){
                res.redirect("http://localhost:3000");
            } else{
                req.email = decoded.data.email;
                req.id = decoded.data.id;
                next();
            }
        });
    },
};