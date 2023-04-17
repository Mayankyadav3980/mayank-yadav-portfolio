import React from "react";
import "./portfolio.css";
import {projects} from "../../data";

const Portfolio = () => {
  return (
    <section id="portfolio" >
      
      <h3>Portfolio</h3>

      <div className="container portfolio__container" >
        {projects.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} style={{ maxHeight:"50%",maxWidth:"100%"}}alt="" />
              </div>
              <h3>{ title } </h3>
              <div className="portfolio__item-cta">
                <a href={ github } className="btn " target="_blank" rel="noreferrer"> github link</a>
                <a href={ demo } className="btn btn-primary " target="_blank"  rel="noreferrer"> Live Demo </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
