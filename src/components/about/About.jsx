import React from "react";
import "./about.css";
import ME from "../../assets/me.png";
import { RiAwardFill } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { FiFolder } from "react-icons/fi";

const About = () => {
  return (
    <section id="about">
      <h5>Get To know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <RiAwardFill className="about__icon" />
                <h5>Experience</h5>
                <small>1+ Years Working</small>
              </article>

              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small>10 in Argentina</small>
              </article>

              <article className="about__card">
                <FiFolder className="about__icon" />
                <h5>Projects</h5>
                <small>20+ completed</small>
              </article>
            </div>

            <p>
            Hello! My name is Lucas and I'm a freelance full stack web developer. I like to immerse myself in my projects and carry them out in detail, ensuring that my final work makes me and my clients proud. In my free time I like to watch movies or play video games, but I never set aside time for reading. I also like to play with my pet, Fiona, a very energetic dog.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
      </div>
    </section>
  );
};

export default About;
