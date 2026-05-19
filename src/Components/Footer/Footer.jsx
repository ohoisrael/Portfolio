import React from "react";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsTwitterX, BsLinkedin } from "react-icons/bs";
import "./footer.css";

const socials = [
  {
    href: "https://www.facebook.com/wunom.izmaname",
    icon: <FaFacebookF />,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/israeloho",
    icon: <FiInstagram />,
    label: "Instagram",
  },
  { href: "https://x.com/ohoisrael", icon: <BsTwitterX />, label: "Twitter" },
  {
    href: "https://www.linkedin.com/in/israel-oho-0398752a6/",
    icon: <BsLinkedin />,
    label: "LinkedIn",
  },
  { href: "https://github.com/ohoisrael", icon: <FaGithub />, label: "GitHub" },
];

const linkGroups = [
  {
    title: "Navigate",
    links: [
      { href: "#home", label: "Home" },
      { href: "#about", label: "About" },
      { href: "#services", label: "Services" },
      { href: "#portfolio", label: "Work" },
    ],
  },
  {
    title: "Studio",
    links: [
      { href: "#experience", label: "Stack" },
      { href: "#contact", label: "Contact" },
      { href: "mailto:ohoisrael@gmail.com", label: "Hire us" },
    ],
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              Oho<span className="text-gradient">Tech</span>
            </a>
            <p>
              A digital studio crafting fast, elegant web and mobile products.
              Built by Israel Oho and trusted collaborators.
            </p>
            <div className="footer__socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer__links">
            {linkGroups.map((g) => (
              <div key={g.title} className="footer__col">
                <h4>{g.title}</h4>
                <ul>
                  {g.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href}>{l.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="footer__col">
              <h4>Reach us</h4>
              <ul>
                <li>
                  <a href="mailto:ohoisrael@gmail.com">ohoisrael@gmail.com</a>
                </li>
                <li>
                  <a href="https://wa.me/+233550240615">+233 55 024 0615</a>
                </li>
                <li>Accra, Ghana</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <small>© {year} OhoTech — All rights reserved.</small>
          <small>
            Built with React &amp; care · <a href="#home">Back to top ↑</a>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
