import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <div className="cta">
      <motion.a 
        href="#portfolio" 
        className="btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View Our Work
      </motion.a>
      <motion.a 
        href="#contact" 
        className="btn btn-primary"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Start a Project
      </motion.a>
    </div>
  );
};

export default CTA;