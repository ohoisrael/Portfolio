import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiNextdotjs,
  SiPython,
  SiFastapi,
} from "react-icons/si";
import "./experience.css";

const tech = [
  { icon: <SiReact />, name: "React" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiTailwindcss />, name: "Tailwind" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiPython />, name: "Python" },
  { icon: <SiFastapi />, name: "FastAPI" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiMysql />, name: "MySQL" },
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">Our Stack</span>
          <h2 className="section-title">
            Built with the tools we{" "}
            <span className="text-gradient">love.</span>
          </h2>
          <p className="section-subtitle">
            A modern, battle-tested stack — chosen for speed, scale, and
            developer joy.
          </p>
        </motion.div>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[...tech, ...tech].map((t, i) => (
            <div key={i} className="marquee__chip">
              <span className="marquee__icon">{t.icon}</span>
              <span>{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
