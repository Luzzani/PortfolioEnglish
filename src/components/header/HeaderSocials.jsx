import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com/in/lucas-luzzani-b4a0a4214" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Luzzani" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
