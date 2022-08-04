import React from "react";
import {About, Footer,Header} from "./containers";
import{ SocialMedia, Navbar} from "./components";
// import Motion from 'framer-motion';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img  className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
            <Navbar />    
            <Header />
            <About />
            <Footer />
            <SocialMedia/>   
        </a>
      </header>
    </div>
  );
}

export default App;

