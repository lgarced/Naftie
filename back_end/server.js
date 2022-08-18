const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./Schemas/index.js');
const resolvers = require('./Schemas/resolvers.js');



const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
//Problably causing the error
// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

const server = new ApolloServer({
  typeDefs,
  resolvers
  // context: 
});



const CONNECTION_URL =
 process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/naftie'; 
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
