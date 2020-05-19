const mongoose = require("mongoose");
const { mongoDbURL } = require("../config");

module.exports = () => {
  try {
    mongoose.connect(mongoDbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("# ********** Database connected successfully ********** #");
  } catch (error) {
    console.log("Database NOT connected. ERROR: ", error);
  }
};
