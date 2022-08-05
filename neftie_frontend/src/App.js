import React from "react";
import {About, Footer ,Header} from "./containers";
import { Navbar, SocialMedia } from "./components";

// import{ SocialMedia} from "./components";
// import { motion } from "framer-motion/dist/framer-motion";
// import './App.scss';


const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <SocialMedia/> 
      <Footer />
    </div>
  );
};

export default App;

