const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./Schemas/index.js');
const db = require('./config/connection.js');


const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
//Problably causing the error
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../neftie_frontend/build/index.html"));
});


const startApolloServer = async (typeDefs, resolvers) => {
await server.start();
server.applyMiddleware({ app });

    db.once("open", () => {
      app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(
          `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
        );
      });
    });

};

startApolloServer(typeDefs, resolvers);


  //This useFindAndModify is causing the error it is deprecated from mongoose version 6
// mongoose.set("useFindAndModify", false) it was removed and it is not needed anymore;