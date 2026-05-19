import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiZap, FiTarget, FiUsers } from "react-icons/fi";
import "./about.css";

const Counter = ({ to, suffix = "", duration = 1.6 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const startTime = performance.now();
    const animate = (now) => {
      const p = Math.min((now - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(start + (to - start) * eased));
      if (p < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
};

const values = [
  {
    icon: <FiZap />,
    title: "Innovation",
    text: "We stay ahead of the curve, shipping products with modern tooling and forward-thinking patterns.",
  },
  {
    icon: <FiTarget />,
    title: "Precision",
    text: "Every pixel, every interaction, every line of code is considered. Quality is non-negotiable.",
  },
  {
    icon: <FiUsers />,
    title: "Partnership",
    text: "We work as an extension of your team — collaborative, responsive, invested in your success.",
  },
];

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">Who we are</span>
          <h2 className="section-title">
            A studio built around <span className="text-gradient">craft.</span>
          </h2>
          <p className="section-subtitle">
            We turn ambitious ideas into polished digital products — built fast,
            built right, and built to scale.
          </p>
        </motion.div>

        <div className="about__grid">
          <motion.div
            className="about__intro"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p>
              OhoTech is an independent digital studio specializing in modern
              web and mobile development. We partner with founders, agencies,
              and teams to design and engineer products people actually want to
              use.
            </p>
            <p>
              From early-stage prototypes to production platforms, we combine
              clean code, considered design, and a relentless focus on outcome.
            </p>

            <div className="about__stats">
              <div className="about__stat">
                <span className="about__stat-value text-gradient">
                  <Counter to={3} suffix="+" />
                </span>
                <span className="about__stat-label">Years of practice</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-value text-gradient">
                  <Counter to={100} suffix="%" />
                </span>
                <span className="about__stat-label">Client satisfaction</span>
              </div>
            </div>

            <a href="#contact" className="btn btn-primary about__cta">
              Start a project
            </a>
          </motion.div>

          <div className="about__values">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="value-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.08 }}
              >
                <div className="value-card__icon">{v.icon}</div>
                <div>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
