const User = require("../model/newuser");
//const {search} = require("./users");
const passport = require("passport");

//////////////////////////// USERS ////////////////////////////

exports.getSignup = (req, res) => {
    res.render("signup");
}

exports.getLogin = (req, res) => {
    res.render("login");
}

exports.addSignup = (req, res) => {
    name = req.body.name;
    email = req.body.email;
    password = req.body.password;
    const newUser = new User({
        name: name,
        email: email,
        password: password
    });
    newUser.save()
        .then(response => {
            req.flash("success_msg", " Account sucessfully created !");
            res.redirect("/")
        })
        .catch(error => {
            req.flash("error_msg", "Failed to create your account !");
            res.redirect("/signup")
            console.log(error)
        });
}
exports.postLogin = (req, res) => {
    email = req.body.email;
    password = req.body.password;
    User.find({
        email
    })
    .then(function (response) {
        req.flash("success_msg", " You are logged in !");
        res.redirect("/");
    })
    .catch(error => {
        res.redirect("error");
    });

};

/* authenticate : passport.authenticate("local",{
    failureRedirect: "user/login",
    failureFlash: "You cannot connect",
    successRedirect:"/",
    successFlash: "You are logged in."
}) */