const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const novelSchema = new Schema({
  title: String,
  author: Schema.Types.ObjectId,
  uploader: Schema.Types.ObjectId,
  createdTime: Date,
  updatedTime: Date
});

module.exports = mongoose.model("novel", novelSchema);
