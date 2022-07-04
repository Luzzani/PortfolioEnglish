import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        LUZZANI
      </a>

      <ul className="permalink">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#Portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://linkedin.com/in/lucas-luzzani-b4a0a4214"
          target="_blank" rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/Luzzani" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; LUZZANI LUCAS PORTFOLIO - All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
