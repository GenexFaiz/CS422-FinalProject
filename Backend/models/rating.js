const mongoose = require("mongoose");
const { DateTime } = require("../resolver");

const Schema = mongoose.Schema;

const ratingSchema = new Schema({
  user: Schema.Types.ObjectId,
  score: Number,
  novel: Schema.Types.ObjectId,
  updatedTime: Date
});

module.exports = mongoose.model("rating", ratingSchema);
