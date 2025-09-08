import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  
  const projects = [
    {
      id: 1,
      image: IMG1,
      title: "Facility Booking for Ghana Communication Technology University",
      category: "web",
      url: "https://booking.gctu.edu.gh"
    },
    {
      id: 2,
      image: IMG2,
      title: "Pharmacy Web-App",
      category: "web",
      url: "https://mobimedgh.app"
    },
    {
      id: 3,
      image: IMG3,
      title: "Gas Company Website",
      category: "web",
      url: "https://www.gasprogh.com"
    },
    
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h5>Our Work</h5>
          <h2>Portfolio</h2>
        </motion.div>

       

        <div className="portfolio__grid">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="portfolio__item"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -10 }}
              >
                <div className="portfolio__item-image">
                  <img src={project.image} alt={project.title} />
                  <div className="portfolio__overlay">
                    <h3>{project.title}</h3>
                    <div className="portfolio__item-cta">
                      <a
                        href={project.url}
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;