import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
// import "./About.scss";
// import { urlFor, client } from "../../client";
// import { images } from "../../constants";

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
        NAFTIE is dedicated to providing the best quality of service to our users while protecting their data and privacy.
      </h2>
      <h3>
        <br />{" "}
        <span>
          NAFTIE is a social media app where you can do more than just share. Join us Today!
        </span>
      </h3>
      <div className="app__profiles">
        <motion.div
          // whileInView={{ opacity: 1 }}
          // whileHover={{
          //   scale: 0.75,
          //   transition: { duration: 0.15 },
          // }}
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: 1,
            repeatDelay: 1,
          }}
          className="app__profile-item"
        >
          {/* <img src={images.mechina} alt="About" /> */}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
