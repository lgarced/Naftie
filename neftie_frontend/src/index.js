import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import SignIn from "./components/login/Login";


const container = document.getElementById("root");
const root = createRoot(container);


root.render(
  <Router>
    <SignIn />
    <App tab="home" />
  </Router>
);
