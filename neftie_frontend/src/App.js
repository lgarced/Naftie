import React from "react";
import {About, Footer 
      ,Header, Apps
      , Market, Messages} from "./containers";
import { Navbar} from "./components";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import{ SocialMedia} from "./components";
import { Route, Routes } from "react-router-dom";
import './App.css';



const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/home">
          <Route exact path={":header"} element={<Header />} />
        </Route>
        <Route path="/about">
          <Route exact path={":about"} element={<About />} />
        </Route>
        <Route path="/messages">
          <Route exact path={":messages"} element={<Messages />} />
        </Route>
        {/* <Route path="/market" element={<Market />} /> */}
        <Route path="/apps">
          <Route exact path={":apps"} element={<Apps />} />
        </Route>
        {/* <Route path="/signup">
          <Signup />
        </Route> */}
        {/* <Route path="/login">
          <Login />}
        </Route> */}
      </Routes>
      {/* <SocialMedia /> */}
      <Footer />
    </div>
  );
};

export default App;

