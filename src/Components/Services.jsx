import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiSmartphone, FiLayers, FiDatabase } from "react-icons/fi";

const Services = () => {
  const services = [
    {
      icon: <FiCode />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies like React, Node.js, and more."
    },
    {
      icon: <FiSmartphone />,
      title: "Mobile Apps",
      description: "iOS and Android applications developed with React Native for cross-platform excellence."
    },
    
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h5>What We Offer</h5>
          <h2>Our Services</h2>
        </motion.div>

        <div className="services__grid">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="service__icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;