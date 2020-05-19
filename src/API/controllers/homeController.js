const homeService = require("../../services/homeService");

module.exports.getAllHomesController = async (req, res) => {
  const result = await homeService.getAllHomesService();
  res.send(result);
};

module.exports.createHomeController = async (req, res) => {
  const result = await homeService.createHomeService(req.body);
  res.send(result);
};
