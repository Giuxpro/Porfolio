import React from 'react'
import "./About.css"
import ME from "../../assets/m.jpg"
import {FaAward} from "react-icons/fa"
import {AiOutlineUsergroupAdd} from "react-icons/ai"
import {VscFolderActive} from "react-icons/vsc"

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Imag" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>5+ Month Working</small>
            </article>

            <article className='about__card'>
              <AiOutlineUsergroupAdd className='about__icon'/>
              <h5>Clients</h5>
              <small>0+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderActive className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>

          </div>
          
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus accusamus eum vitae officia optio minima voluptatum est fugit. Atque doloremque omnis exercitationem explicabo totam, quasi rem hic. Ratione, numquam optio.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          
        </div>
      </div>
    </section>
  )
}

export default about