import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  FiCode,
  FiSmartphone,
  FiDatabase,
  FiArrowUpRight,
} from "react-icons/fi";

const services = [
  {
    icon: <FiCode />,
    title: "Web Development",
    description:
      "Production-grade websites and web apps built with React, Next.js, and modern tooling. Fast, accessible, and built to scale.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    icon: <FiSmartphone />,
    title: "Mobile Apps",
    description:
      "Cross-platform mobile experiences with React Native. Native feel, native performance, single codebase.",
    tags: ["React Native", "Expo", "iOS / Android"],
  },
  {
    icon: <FiDatabase />,
    title: "Backend & APIs",
    description:
      "Reliable APIs, databases, and integrations. Node.js, Express, FastAPI, MongoDB, and MySQL — the engine room of your product.",
    tags: ["Node.js", "FastAPI", "MongoDB"],
  },
];

const SpotlightCard = ({ service, index }) => {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      ref={ref}
      className="spotlight-card service-card"
      onMouseMove={handleMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
    >
      <div className="spotlight-card__glow" />
      <div className="service-card__inner">
        <div className="service-card__head">
          <div className="service-card__icon">{service.icon}</div>
          <span className="service-card__index">
            0{index + 1}
          </span>
        </div>
        <div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <div className="service-card__tags">
            {service.tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </div>
        <FiArrowUpRight className="service-card__arrow" />
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">What we offer</span>
          <h2 className="section-title">
            Services that ship <span className="text-gradient">real outcomes.</span>
          </h2>
          <p className="section-subtitle">
            A focused set of capabilities — from idea to product — delivered
            end-to-end.
          </p>
        </motion.div>

        <div className="services__grid">
          {services.map((s, i) => (
            <SpotlightCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .services__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 1024px) {
          .services__grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .spotlight-card {
          position: relative;
          border-radius: var(--radius-lg);
          background: var(--bg-soft);
          border: 1px solid var(--border);
          overflow: hidden;
          isolation: isolate;
          transition: border-color 350ms var(--ease), transform 350ms var(--ease);
        }

        .spotlight-card:hover {
          border-color: var(--border-strong);
          transform: translateY(-4px);
        }

        .spotlight-card__glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            420px circle at var(--mx, 50%) var(--my, 50%),
            rgba(139, 92, 246, 0.22),
            transparent 40%
          );
          opacity: 0;
          transition: opacity 350ms var(--ease);
          pointer-events: none;
          z-index: 0;
        }

        .spotlight-card:hover .spotlight-card__glow {
          opacity: 1;
        }

        .service-card__inner {
          position: relative;
          z-index: 1;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          height: 100%;
        }

        .service-card__head {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .service-card__icon {
          width: 3rem;
          height: 3rem;
          border-radius: 0.85rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-strong);
          font-size: 1.35rem;
          color: var(--text);
          transition: var(--transition);
        }

        .spotlight-card:hover .service-card__icon {
          background: var(--gradient);
          color: #06060d;
          border-color: transparent;
        }

        .service-card__index {
          font-family: "Space Grotesk", sans-serif;
          font-size: 0.85rem;
          letter-spacing: 0.2em;
          color: var(--text-dim);
        }

        .service-card h3 {
          font-size: 1.4rem;
          margin-bottom: 0.6rem;
        }

        .service-card p {
          color: var(--text-muted);
          margin-bottom: 1.25rem;
          font-size: 0.98rem;
        }

        .service-card__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .tag {
          display: inline-flex;
          align-items: center;
          padding: 0.25rem 0.7rem;
          border-radius: 999px;
          font-size: 0.72rem;
          letter-spacing: 0.04em;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border);
        }

        .service-card__arrow {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          font-size: 1.1rem;
          color: var(--text-dim);
          opacity: 0;
          transform: translate(-6px, 6px);
          transition: var(--transition);
        }

        .spotlight-card:hover .service-card__arrow {
          opacity: 1;
          transform: translate(0, 0);
          color: var(--accent);
        }

        @media (max-width: 768px) {
          .services__grid {
            grid-template-columns: 1fr;
          }
          .service-card__inner {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
