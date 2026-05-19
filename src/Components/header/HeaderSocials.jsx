import React from "react";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const links = [
  {
    href: "https://www.linkedin.com/in/israel-oho-0398752a6/",
    icon: <BsLinkedin />,
    label: "LinkedIn",
  },
  { href: "https://github.com/ohoisrael", icon: <FaGithub />, label: "GitHub" },
  {
    href: "https://dribbble.com/israeloho",
    icon: <FiDribbble />,
    label: "Dribbble",
  },
];

const HeaderSocials = () => {
  return (
    <motion.div
      className="header__socials"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
    >
      {links.map((l, i) => (
        <motion.a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={l.label}
          whileHover={{ y: -3, color: "#22d3ee" }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          {l.icon}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default HeaderSocials;
