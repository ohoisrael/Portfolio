import React from "react";
import { motion } from "framer-motion";
import "./about.css";

const About = () => {
  return (
    <section id="about" className="company-about">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h5>Who We Are</h5>
          <h2>About OhoTech</h2>
        </motion.div>

        <div className="about__container">
          <motion.div 
            className="about__content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p>
              OhoTech is an innovative digital studio specializing in creating 
              cutting-edge web and mobile applications. We transform ideas into 
              powerful digital solutions that drive business growth and enhance 
              user experiences.
            </p>
            
            <p>
              Our team combines technical expertise with creative vision to deliver
              exceptional digital products that stand out in today's competitive market.
              We pride ourselves on clean code, intuitive design, and seamless user experiences.
            </p>

            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
          </motion.div>

          <motion.div 
            className="about__values"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="value-item">
              <h3>Innovation</h3>
              <p>We stay ahead of technology trends to deliver forward-thinking solutions.</p>
            </div>
            <div className="value-item">
              <h3>Quality</h3>
              <p>Every project receives our full attention to detail and commitment to excellence.</p>
            </div>
            <div className="value-item">
              <h3>Collaboration</h3>
              <p>We work closely with our clients to ensure their vision becomes reality.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;