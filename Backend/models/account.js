const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const accountSchema = new Schema({
    type: String,
    email: String,
    username: String,
    password: String,
    avatar: String,
    createdTime: Date
});

module.exports = mongoose.model("account", accountSchema);
