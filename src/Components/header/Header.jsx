import React from "react";
import { motion } from "framer-motion";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header className="company-header">
      <div className="particles-background" id="particles-js"></div>
      <div className="container header__container">
        <motion.h5
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pre-title"
        >
          Innovative Digital Solutions
        </motion.h5>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="company-name"
        >
          Oho<span>Tech</span>
        </motion.h1>

        <motion.h5
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-light company-tagline"
        >
          Web & Mobile App Development Solution
        </motion.h5>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <CTA />
        </motion.div>

        <motion.a
          href="#about"
          className="scroll__down"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <div className="scroll-arrow"></div>
          <span>Explore More</span>
        </motion.a>
      </div>
    </header>
  );
};

export default Header;
