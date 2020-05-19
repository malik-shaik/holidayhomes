const express = require("express");
const connectDB = require("./src/database/connection");
const homeRoutes = require("./src/API/routes/homeRoutes");

const app = express();

//connection database
connectDB();

// middlewares
app.use(express.json());

app.use("/home", homeRoutes);
// app.use("/user", userRoutes);

module.exports = app;
