import React from 'react'
import Backend from '../components/Backend'
import Frontend from '../components/Frontend'
import '../styles/Skills.css'

const Skills = () => {
  return (
    <>
        <section className="skills section" id="skills">
            <h2 className="section-title">Skills</h2>
            <span className="section-subtitle">My Introduction</span>

            <div className="skills-container container grid">
                <Frontend></Frontend>
                <Backend></Backend>
            </div>
        </section>
    </>
  )
}

export default Skills