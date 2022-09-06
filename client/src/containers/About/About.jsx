import React, { useState, useEffect } from "react";
import { motion } from "framer-motion/dist/framer-motion";
import ReactPlayer from 'react-player'
import "./About.css";
import { images } from "../../constants";

// import { urlFor, client } from "../../client";

const About = () => {
//   const [abouts, setAbouts] = useState([]);

//   useEffect(() => {
//     const query = '*[_type == "abouts"]';

//     client.fetch(query).then((data) => {
//       setAbouts(data);
//     });
//   }, []);

  return (
    <>
      <h2 className="head-text">
        NAFTIE is dedicated to providing the best quality of service to our
        users while p
        </h2>
        <h2>
        <span>
          NAFTIE is a social media app where you can do more than just share.
          Join us Today!
        </span>
      </h2>
      <div className="app__profiles">
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            ease: "easeInOut",
          }}
          className="app__profile-item"
        >
          <motion.div>
            <div className="App">
              <ReactPlayer url="logovid" type="video/mp4" playing="true" />
              <video src={images.logovid} type="video/mp4" controls></video>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
