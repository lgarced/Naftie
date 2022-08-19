import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server-express';
// import resolvers from './Schemas/Resovler/resolvers.js';
// import typeDefs from './Schemas/TypeDefs/typeDefs.js';



const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
//Problably causing the error
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// const server = new ApolloServer({
//   typeDefs,
//   resolvers
//   // context: 
// });



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



  //This useFindAndModify is causing the error it is deprecated from mongoose version 6
// mongoose.set("useFindAndModify", false);
