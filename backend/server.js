/** @format */
require("dotenv").config();
const express = require("express");
const mongo = require("mongoose");

// Initializing express App
const app = express();

mongo
  .connect(process.env.m_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Listening to Port ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
