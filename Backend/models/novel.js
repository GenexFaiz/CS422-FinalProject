const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const novelSchema = new Schema({
  title: String,
  author: Schema.Types.ObjectId,
  uploader: Schema.Types.ObjectId,
  summary: String,
  view: Number,
  createdTime: Date,
  avgScore: Number,
  updatedTime: Date
});

module.exports = mongoose.model("novel", novelSchema);
