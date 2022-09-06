import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import client from "./apolloClient";
import { ApolloProvider } from "@apollo/react-hooks";
import { AuthContext, AuthProvider  } from "./utils/authContext";


const container = document.getElementById("root");
const root = createRoot(container);


root.render(
  <ApolloProvider client={client}>
  <Router>
    <React.StrictMode>
      <AuthProvider>
      <App tab="home" />
      </AuthProvider>
    </React.StrictMode>
  </Router>
  </ApolloProvider>
);
