import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        OhoTech
      </a>

      <ul className="permalinks">
        <li>
          <a href="#"></a>Home
        </li>
        <li>
          <a href="#about"></a>About
        </li>
        <li>
          <a href="experience"></a>Experience
        </li>
        <li>
          <a href="portfolio"></a>Portfolio
        </li>
        <li>
          <a href="contact"></a>Contact
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/wunom.izmaname">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/israeloho?igsh=dm14M2UwNWRmNjR2&utm_source=qr">
          <FiInstagram />
        </a>
        <a href="https://x.com/ohoisrael">
          <BsTwitterX />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Israel Oho. All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
