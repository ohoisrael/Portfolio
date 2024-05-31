import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Instagram Clone</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ohoisrael/Instagram-Clone" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://social-app-israeloho.vercel.app"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Nurse Booker Web-App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ohoisrael/Nurse-Booker" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://nurse-booker-app.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Municipal Management System</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ohoisrael/Municipal-System" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://municipal-managementsystem.onrender.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        
      </div>
    </section>
  );
};

export default Portfolio;
