import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <a href="#" className="footer__logo">
        OhoTech
      </a>

      <div className="footer__socials">
        <a href="https://www.facebook.com/wunom.izmaname" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/israeloho?igsh=dm14M2UwNWRmNjR2&utm_source=qr" aria-label="Instagram">
          <FiInstagram />
        </a>
        <a href="https://x.com/ohoisrael" aria-label="Twitter">
          <BsTwitterX />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; {currentYear} OhoTech. All Rights Reserved</small>
      </div>

      
    </footer>
  );
};

export default Footer;