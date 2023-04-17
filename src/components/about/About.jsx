import React from 'react'
import './about.css';
import { BsBook } from 'react-icons/bs'
import { GrPersonalComputer } from 'react-icons/gr'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { MdComputer } from 'react-icons/md'


const About = () => {
  return (
    
    <section id='about'>
      <div className='container about__container'>
          <div className="abt">
              <h2 className="about__title">About Me </h2>
              <div className="about__content">
                <h5>I am a Highly motivated, enthusiastic
                    and Self-driven Engineering student with
                    interest in Web Development.
                    Continually working upon my knowledge and Skills to stay
                    at cutting edge of technology.
                </h5>
              </div>
          </div>

          <div className='edu__container'>
              <h3>Education</h3> 
              <div className='edu__cards'> 

                  <article className="edu__card">
                     <div className='edu__icon-block'>
                     <MdComputer className='edu__icon'/>
                     </div>
                    
                     <div className='edu__content'>
                     <small>2018-2022</small>
                     <p>Bachelor of Technology</p>
                     <small> HMR Institute of Technology and Management</small>
                     </div>
                  </article>

                  <article className="edu__card">
                     <div className='edu__icon-block'>
                     <HiOutlineDocumentText className='edu__icon'/>
                     </div>
                    
                     <div className='edu__content'>
                     <small>2016-2018</small>
                     <p>Senior High School</p>
                     <small> St. Columbo Public School</small>
                     </div>
                  </article>

                  <article className="edu__card">
                     <div className='edu__icon-block'>
                     <BsBook className='edu__icon'/>
                     </div>
                    
                     <div className='edu__content'>
                     <small>2006-2016</small>
                     <p>Middle and High School</p>
                     <small> St. Columbo Public School</small>
                     </div>
                  </article>

              </div>
          </div>



      </div>
    </section>
    
  )
}

export default About