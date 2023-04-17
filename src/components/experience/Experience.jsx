import React from 'react'
import { BiCheck } from 'react-icons/bi'
import './experience.css';

const Experience = () => {
  return (
    <section id='experience'>
       <h3> Experience</h3>

       <div className="container experiences__container">
        <article className="experience">
          <div className="experience__head">
            <h3>Central Adoption Resource Authority</h3>
            <h4>Web Development intern</h4>
            <h5>10 Dec, 2021- 10 Mar, 2022</h5>
          </div>

          <ul className="experience__list">
            <li>
              <BiCheck className="experience__list-icon" />
              <p>
              Revamped the existing CARA portal, to 
              improve the scalability and performance of the portal. Increased the efficiency
by 30%.
              </p>
            </li>
            <li>
              <BiCheck className="experience__list-icon" />
              <p>
              Collaborated with 10+ peoples to work on the project.
              </p>
            </li>
            <li>
              <BiCheck className="experience__list-icon" />
              <p>
              Improved the UI by using the React.js tech stack.
              </p>
            </li>
          </ul>
        </article>
        <article className="experience">
          <div className="experience__head">
            <h3>The Sparks Foundation</h3>
            <h4>Web Development and Design intern</h4>
            <h5>01 May, 2021 - 01 Jun, 2021</h5>
          </div>

          <ul className="experience__list">
            <li>
              <BiCheck className="experience__list-icon" />
              <p>
              Designed a payment gateway System, which ensures secure
               and fast monetary transactions and reduced the
transaction time by 20%.
              </p>
            </li>
            <li>
              <BiCheck className="experience__list-icon" />
              <p>
              Powered by Razor pay APIs services at the backend.
              </p>
            </li>
          </ul>
        </article>
        <article className="experience">
          <div className="experience__head">
            <h3>Exposes Data Labs</h3>
            <h4>Frontend Web Developer</h4>
            <h5>20 Feb, 2021 - 20 Mar, 2021</h5>
          </div>

          <ul className="experience__list">
            <li>
              <BiCheck className="experience__list-icon" />
              <p>
              Developed a Video Calling Web Application. Learnt various new technologies such as WebRTC, Channeling etc.
              </p>
            </li>
            <li>
              <BiCheck className="experience__list-icon" />
              <p>
              Built it using HTML5, CSS3, Bootstrap, JavaScript.
              </p>
            </li>
          </ul>
        </article>
        
      </div>
    </section>
  )
}

export default Experience