import React from "react";
import "./about.css";


const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src="./im.jpg" alt="About Image" />
          </div>
        </div>

        <div className="about__content">

          <p>
          I am a Full-Stack Developer skilled in building responsive web and mobile applications and creating interactive, user-friendly interfaces. My expertise includes working with modern technologies to deliver efficient and scalable solutions.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
