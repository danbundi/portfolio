import React from 'react'
import '../styles/about.css'
import '../styles/general.css'

import Info from '../components/info'
import image from "../assets/mine2.jpg"

const About = () => {
  return (
    <>
        <section className="about section" id="about">
            <h2 className="section-title">About Me</h2>
            <span className="section-subtitle">My introduction</span>

            <div className="about-container container grid">
                <img src={image} alt="" className="about-img" />

                <div className="about-data">
                    <Info/>

                    <p className="about-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto perspiciatis laborum hic, repellat voluptatem aspernatur itaque! Ipsum adipisci eos necessitatibus, </p>

                    <a href="" className="button button--flex">Download CV <i class="fa-solid fa-file button-icon"></i></a>
                </div>
            </div>
        </section>
    </>
  )
}

export default About