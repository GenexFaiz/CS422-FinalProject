const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: String,
  type: String,
  account: Schema.Types.ObjectId,
});

module.exports = mongoose.model("author", authorSchema);
