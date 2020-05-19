const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
  name: String,
  rent: Number,
  images: String, //TODO: make it array for many images
  address: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Home", homeSchema);
