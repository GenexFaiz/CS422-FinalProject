const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const novelSchema = new Schema({
  title: String,
  author: String,
  uploader: Schema.Types.ObjectId,
});

module.exports = mongoose.model("novel", novelSchema);
