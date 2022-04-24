const mongoose = require ("mongoose");
passportLocalMongoose = require("passport-local-mongoose");

const userSchema = mongoose.Schema({
    name : String,
    email : String,
    password : String,
}
);


userSchema.plugin(passportLocalMongoose, {
    usernameField:"email"
})





module.exports = mongoose.model("User", userSchema);

