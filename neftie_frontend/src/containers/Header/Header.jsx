import React from "react";
import { motion } from "framer-motion/dist/framer-motion";

import { AppWrap } from "../../wrapper";
// import { images } from "../../constants";
import "./Header.css";


const Header = () => (
  <div className="app__header app__flex">
    <motion.div>
        <p>
            This is paragraph that is not visible on the screen.Maybe? 
        </p>
    </motion.div>
 </div>
)

export default AppWrap(Header, "home");
