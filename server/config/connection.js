const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/naftie", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
;
 
module.exports = mongoose.connection;


// const CONNECTION_URL =
//   process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/naftie";
// const PORT = process.env.PORT || 5000;