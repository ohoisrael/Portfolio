import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiExternalLink, FiArrowUpRight, FiDownload } from "react-icons/fi";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.webp";
import IMG2 from "../../assets/portfolio2.webp";
import IMG3 from "../../assets/portfolio3.webp";
import APP1 from "../../assets/app1.webp";

const projects = [
  {
    id: 1,
    image: IMG1,
    title: "GCTU Facility Booking",
    description:
      "End-to-end booking platform for Ghana Communication Technology University's campus facilities.",
    category: "web",
    url: "https://booking.gctu.edu.gh",
  },
  {
    id: 2,
    image: IMG2,
    title: "GLAMAIN",
    description:
      "E-Commerce web platform for buying and selling products.",
    category: "web",
    url: "https://gitlghglamaintest.glamain.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "GCTU CareerHub",
    description:
      "Industrial attachment and career portal for GCTU students and partners.",
    category: "web",
    url: "https://industrial.gctu.edu.gh",
  },
  {
    id: 4,
    image: APP1,
    title: "News App",
    description:
      "Native mobile news app for Ghana Communication Technology University. Breaking news, categorized feeds, and announcements — built with React Native and Expo.",
    category: "mobile",
    tags: ["React Native", "Expo", "iOS / Android"],
    url: "https://expo.dev/accounts/israeloho/projects/GCTUNewsApp/builds/f77f78a8-7bd4-408e-a72a-1ed3a3584b37",
    ctaLabel: "Download build",
  },
];

const filters = [
  { key: "all", label: "All Work" },
  { key: "web", label: "Web" },
  { key: "mobile", label: "Mobile" },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">Selected work</span>
          <h2 className="section-title">
            Projects we're <span className="text-gradient">proud of.</span>
          </h2>
          <p className="section-subtitle">
            A glimpse at recent products we've designed, built, and shipped.
          </p>
        </motion.div>

        <div className="portfolio__filter" role="tablist">
          {filters.map((f) => (
            <button
              key={f.key}
              role="tab"
              aria-selected={filter === f.key}
              className={filter === f.key ? "is-active" : ""}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div className="portfolio__grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                key={p.id}
                layout
                className="portfolio-card"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
              >
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-card__link"
                  aria-label={`Open ${p.title}`}
                >
                  <div className="portfolio-card__media">
                    <img src={p.image} alt={p.title} loading="lazy" />
                    <div className="portfolio-card__shine" />
                  </div>
                  <div className="portfolio-card__body">
                    <div className="portfolio-card__head">
                      <h3>{p.title}</h3>
                      <span className="portfolio-card__icon">
                        <FiArrowUpRight />
                      </span>
                    </div>
                    <p>{p.description}</p>
                    <span className="portfolio-card__cta">
                      {p.category === "mobile" ? <FiDownload /> : <FiExternalLink />}{" "}
                      {p.ctaLabel || "View live site"}
                    </span>
                  </div>
                </a>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <motion.p
            className="portfolio__empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            More projects in this category coming soon.
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
