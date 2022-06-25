import React from "react";
import "./nav.css";
import { GoHome } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { BsBook } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";
import { RiContactsLine } from "react-icons/ri";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActiveNav("#home")}
        className={activeNav === "#home" ? "active" : ""}
      >
        <GoHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FaRegUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BsBook />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#service")}
        className={activeNav === "#service" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <RiContactsLine />
      </a>
    </nav>
  );
};

export default Nav;
