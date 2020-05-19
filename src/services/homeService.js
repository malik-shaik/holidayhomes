const Home = require("../database/models/homeModels");

module.exports.getAllHomesService = async () => {
  //somuch process data
  const results = await Home.find();
  return results;
};
module.exports.createHomeService = async (data) => {
  const home = await new Home({ ...data });
  const results = await home.save();
  //somuch process data
  return results;
};
