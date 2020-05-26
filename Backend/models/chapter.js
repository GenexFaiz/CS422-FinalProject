const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const chapterSchema = new Schema({
  title: String,
  number: Number,
  content: String,
  uploadTime: Date,
  novel: Schema.Types.ObjectId,
});

module.exports = mongoose.model("chapter", chapterSchema);
