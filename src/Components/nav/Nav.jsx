import React, { useEffect, useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { FaFolderOpen } from "react-icons/fa";
import { FiAward } from "react-icons/fi";

const items = [
  { id: "home", href: "#home", icon: <AiOutlineHome />, label: "Home" },
  { id: "about", href: "#about", icon: <AiOutlineUser />, label: "About" },
  { id: "services", href: "#services", icon: <BiBook />, label: "Services" },
  { id: "experience", href: "#experience", icon: <FiAward />, label: "Skills" },
  { id: "portfolio", href: "#portfolio", icon: <FaFolderOpen />, label: "Work" },
  {
    id: "contact",
    href: "#contact",
    icon: <BiMessageSquareDetail />,
    label: "Contact",
  },
];

const Nav = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter(Boolean);

    if (!sections.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          );
        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="floating-nav" aria-label="Section navigation">
      {items.map((it) => (
        <a
          key={it.id}
          href={it.href}
          aria-label={it.label}
          className={active === it.id ? "is-active" : ""}
        >
          <span className="floating-nav__icon">{it.icon}</span>
          <span className="floating-nav__tooltip">{it.label}</span>
        </a>
      ))}
    </nav>
  );
};

export default Nav;
