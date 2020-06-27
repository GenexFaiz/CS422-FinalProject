const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const novelSchema = new Schema({
  title: String,
  author: Schema.Types.ObjectId,
  uploader: Schema.Types.ObjectId,
  summary: String,
  createdTime: Date,
  updatedTime: Date
});

module.exports = mongoose.model("novel", novelSchema);
