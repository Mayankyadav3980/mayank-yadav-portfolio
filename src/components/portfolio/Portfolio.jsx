import React from 'react'
import {projects} from "../../data";
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id="portfolio">
    <h5>My Recent Work </h5>
    <h2>Portfolio</h2>

    <div className="container portfolio__container">
      {projects.map(({ id, image, title, github, demo }) => {
        return (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt="" />
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
  )
}

export default Portfolio