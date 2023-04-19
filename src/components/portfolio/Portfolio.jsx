import React from "react";
import "./portfolio.css";
import { projects } from "../../data";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  AOS.init();
  return (
    <section id="portfolio" data-aos="fade-in" data-aos-duration="1000">
      <h3>Portfolio</h3>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src={IMG1}
              style={{ maxHeight: "20rem", maxWidth: "100%" }}
              alt=""
            />
          </div>
          <h3>Crowd Coin - A blockchain web application </h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Mayankyadav3980/crowd-coin"
              className="btn "
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              github link
            </a>
            {/* <a href="" className="btn btn-primary " target="_blank"  rel="noreferrer"> Live Demo </a> */}
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src={IMG2}
              style={{ maxHeight: "20rem", maxWidth: "100%" }}
              alt=""
            />
          </div>
          <h3>Random User Generator Web App </h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Mayankyadav3980/RandomUserGenerator"
              className="btn "
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              github link
            </a>
            <a
              href="https://mayankyadav3980.github.io/RandomUserGenerator/"
              className="btn btn-primary "
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Live Demo{" "}
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src={IMG3}
              style={{ maxHeight: "20rem", maxWidth: "100%" }}
              alt=""
            />
          </div>
          <h3>Keeper App: keep track of your essentials </h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Mayankyadav3980/Keeper-App"
              className="btn "
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              github link
            </a>
            <a
              href="https://mayankyadav3980.github.io/Keeper-App/"
              className="btn btn-primary "
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Live Demo{" "}
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src={IMG4}
              style={{ maxHeight: "20rem", maxWidth: "100%" }}
              alt=""
            />
          </div>
          <h3> Payment Gateway Integration Project</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Mayankyadav3980/Payment-Gateway-Integration"
              className="btn "
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              github link
            </a>
            <a
              href="https://mayankyadav3980.github.io/Payment-Gateway-Integration/"
              className="btn btn-primary "
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Live Demo{" "}
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src={IMG5}
              style={{ maxHeight: "20rem", maxWidth: "100%" }}
              alt=""
            />
          </div>
          <h3>Central Adoption Resource Authority </h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Mayankyadav3980/CARA"
              className="btn "
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              github link
            </a>
            {/* <a href="" className="btn btn-primary " target="_blank"  rel="noreferrer"> Live Demo </a> */}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
