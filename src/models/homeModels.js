const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
  name: String,
  rent: Number,
  images: String,
  address: String,
});

module.exports = mongoose.model("Home", homeSchema);
