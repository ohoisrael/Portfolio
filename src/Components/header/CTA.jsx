import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import CV from "../../assets/cv.pdf";

const MagneticBtn = ({ children, className = "", as = "a", ...rest }) => {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0, 0)";
  };

  const Comp = motion[as];

  return (
    <Comp
      ref={ref}
      className={`btn magnetic ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...rest}
    >
      {children}
    </Comp>
  );
};

const CTA = () => {
  return (
    <div className="cta">
      <MagneticBtn href={CV} download className="btn-primary">
        Download CV
        <span className="btn-icon">
          <FiDownload />
        </span>
      </MagneticBtn>
      <MagneticBtn href="#contact">
        Let's Talk
        <span className="btn-icon">
          <FiArrowRight />
        </span>
      </MagneticBtn>
    </div>
  );
};

export default CTA;
