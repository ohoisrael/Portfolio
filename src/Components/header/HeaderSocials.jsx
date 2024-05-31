import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/israel-oho-0398752a6/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/ohoisrael" target="_blank">
        <FaGithub />
      </a>
      <a href="https://dribbble.com/israeloho" target="_blank">
        <FiDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
