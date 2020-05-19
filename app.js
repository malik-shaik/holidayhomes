const express = require("express");
const cors = require("cors");
const connectDB = require("./src/database/connection");
const homeRoutes = require("./src/API/routes/homeRoutes");
const userRoutes = require("./src/API/routes/userRoutes");

const app = express();

//connection database
connectDB();

// middlewares
app.use(express.json());
app.use(cors());

app.use("/home", homeRoutes);
app.use("/user", userRoutes);

module.exports = app;
