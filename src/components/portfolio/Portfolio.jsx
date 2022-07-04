import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/captuira.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="foto de prueba" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Luzzani" className="btn">
              Github
            </a>
            <a
              href="https://github.com/Luzzani/PortfolioEn"
              className="btn btn-primary"
              target="_blank" rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="foto de prueba" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Luzzani" className="btn">
              Github
            </a>
            <a
              href="https://github.com/Luzzani/PortfolioEn"
              className="btn btn-primary"
              target="_blank" rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="foto de prueba" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Luzzani" className="btn">
              Github
            </a>
            <a
              href="https://github.com/Luzzani/PortfolioEn"
              className="btn btn-primary"
              target="_blank" rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
