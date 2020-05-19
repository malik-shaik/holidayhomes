const homeService = require("../../services/homeService");

module.exports.createHomeController = async (req, res) => {
  const result = await homeService.createHomeService(req.body);
  res.send(result);
};
