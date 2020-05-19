const Home = require("../models/homeModels");

module.exports.createHomeService = async (data) => {
  const home = await new Home({ ...data });
  const results = await home.save();
  //somuch process data
  return results;
};
