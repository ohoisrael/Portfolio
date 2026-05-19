import React, { useEffect, useRef } from "react";
import Header from "./Components/header/Header";
import Nav from "./Components/nav/Nav";
import About from "./Components/about/About";
import Services from "./Components/Services";
import Experience from "./Components/Experience/Experience";
import Portfolio from "./Components/portfolio/Portfolio";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    if (!window.matchMedia("(hover: hover)").matches) return;

    let x = 0;
    let y = 0;
    let rafId = 0;

    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
          rafId = 0;
        });
      }
    };

    const onEnter = (e) => {
      if (e.target.closest("a, button, .magnetic, .spotlight-card")) {
        cursor.classList.add("is-hover");
      }
    };
    const onLeave = (e) => {
      if (e.target.closest("a, button, .magnetic, .spotlight-card")) {
        cursor.classList.remove("is-hover");
      }
    };

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />
      <Header />
      <Nav />
      <About />
      <Services />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
