const User = require("../model/user");
const passport = require("passport");

exports.flashMessageWithAuthenticate = (req, res) => {

    const password = req.body.password;
    const email = req.body.email;

    User.findOne({
        password,
        email
        })

        .then(
            user => {
            if (password == user.password && email == user.email) {
                req.flash("success_msg", "You are logged in ! Welcome back !");
                res.redirect("/")
            }
        }).catch(
            error => {
                req.flash("error_msg", "Failed to log into your account.");
                res.redirect('/login');
            }
        );
}