import React, { useState } from "react";
import '../../Styles/Navbar.css'; 
// import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion, AnimatePresence} from "framer-motion/dist/framer-motion";
import { images } from "../../constants";

const Navbar = () => {
  const [toogle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar_logo">
        <img src={images.logo}alt="Neftie website logo" />
      </div>
      <ul className="app__navbar_links">
        {["home", "posts", "messaging", "apps", "market"].map((item) => (
          <li className="app_flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}> {item} </a>
          </li>
        ))}
      </ul>
      <div className="hamburguessa">
        {!toogle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.6 } }}
          >
            {/* <HiMenuAlt4 onClick={() => setToggle(true)} /> */}
          </motion.div>
        )}
        <AnimatePresence>
          {toogle && (
            <>
              <motion.div
                style={{ position: "absolute" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.6 } }}
                exit={{ opacity: 0 }}
              >
                {["home", "about", "contact"].map(
                  (item) => (
                    <li key={`link-${item}`}>
                      <a href={`#${item}`} onClick={() => setToggle(false)}>
                        {item}
                      </a>
                    </li>
                  )
                )}
              </motion.div>
              <motion.div
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: 100, transition: { duration: 0.6 }, opacity: 1 }}
                exit={{ y: 0, opacity: 0, transition: { duration: 0.6 } }}
              >
                {/* whileInView={ { x: [300, 0] } }
                transition={{ duration: 0.85, ease: "easeInOut" }} */}
                {/* <HiX onClick={() => setToggle(false)} /> */}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
