const express = require("express");
const homeController = require("../controllers/homeController");

const router = express.Router();

router.get("/", homeController.getAllHomesController);

router.post("/createhome", homeController.createHomeController);

module.exports = router;
