import React from "react";
import { motion } from "framer-motion";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const SplitText = ({ text, className = "", delay = 0, gradient = false }) => {
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} className="split-word" aria-hidden="true">
          <motion.span
            className={`split-word__inner${gradient ? " text-gradient" : ""}`}
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.85,
              delay: delay + i * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {w}
          </motion.span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </span>
  );
};

const Header = () => {
  return (
    <header id="home" className="hero">
      <div className="hero__orbs" aria-hidden="true">
        <motion.div
          className="orb orb-cyan"
          style={{ width: 420, height: 420, top: "-10%", left: "-8%" }}
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="orb orb-violet"
          style={{ width: 480, height: 480, bottom: "-15%", right: "-10%" }}
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container hero__container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero__eyebrow"
        >
          <span className="hero__eyebrow-dot" />
          <span>Innovative Digital Solutions</span>
        </motion.div>

        <h1 className="hero__title">
          <span className="hero__line">
            <SplitText text="We craft modern" delay={0.1} />
          </span>
          <span className="hero__line">
            <SplitText text="web &" delay={0.35} />{" "}
            <SplitText text="mobile experiences." delay={0.5} gradient />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="hero__lede"
        >
          OhoTech is a digital studio building fast, elegant products — from
          dashboards and SaaS to mobile apps and brand-defining web platforms.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
        >
          <CTA />
        </motion.div>

        <motion.div
          className="hero__marquee"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <span className="hero__marquee-label">Trusted stack</span>
          <div className="hero__marquee-track">
            {["React", "Next.js", "Node.js", "React Native", "TypeScript", "MongoDB"].map(
              (s) => (
                <span key={s}>{s}</span>
              )
            )}
          </div>
        </motion.div>
      </div>

      <HeaderSocials />

      <motion.a
        href="#about"
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        aria-label="Scroll to about section"
      >
        <span className="hero__scroll-label">Scroll</span>
        <span className="hero__scroll-line">
          <span className="hero__scroll-dot" />
        </span>
      </motion.a>
    </header>
  );
};

export default Header;
