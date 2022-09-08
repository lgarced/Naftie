const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();

// const PORT = process.env.PORT || 5000;
const app = express();
console.log(process.env.MONGODB_URI);

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/naftie", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
;

module.exports = mongoose.connection;


// const CONNECTION_URL =
//   process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/naftie";
// const PORT = process.env.PORT || 5000;