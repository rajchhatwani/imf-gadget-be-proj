const express = require("express");
const { connectDB } = require("./config/db");
const gadgetRoutes = require("./routes/gadgetRoutes");

const app = express();
app.use(express.json());

app.use("/gadgets", gadgetRoutes);

connectDB();

module.exports = app;
