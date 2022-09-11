const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas/index.js');
const db = require('./config/connection.js');
const { authMiddleware } = require("./utils/auth");
// const { Server } = require("socket.io");
const http = require("http")
const path = require('path')

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// const ioServer = http.createServer(app)

// const io = new Server(Server, {
//   cors: {
//     origin: "http://localhost:3001",
//     method: ["GET", "POST"]
//   }
// })

// io.on("connection", (socket) => {
//   console.log(`User connected: ${socket.id}`);

//   socket.on("join_room", (data) => {
//     socket.join(data)
//     console.log(`User with ID: ${socket.id} joined room: ${data}`)
//   })

//   socket.on("send_message", (data) => {
//     console.log(data);
//     socket.to(data.room).emit("receive_message", data)
//   })

//   socket.on("disconnect", () => {
//     console.log("User disconnected", socket.id)
//   })
// })

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
//Problably causing the error
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

//FOR TESTING PURPOSES
app.get("/whoami", (req,res)=> {
  res.send("<h1>THIS IS NAFTIE, THE ILLEST SOCIAL MEDIA PLATFORM!</h1>")
})
app.get("*", (req, res) => {
  console.log("I was hit!")
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
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