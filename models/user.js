const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,           // ✅ Prevent duplicate registrations
    trim: true,
    lowercase: true,        // ✅ Normalize emails
    match: [/^\S+@\S+\.\S+$/, "Please provide a valid email"] // ✅ Email format validation
  }
});

// ✅ Adds username, hash, salt fields and authentication methods
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
