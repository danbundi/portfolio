import React from 'react'

const info = () => {
  return (
    <>
        <div className="about-info grid">
            <div className="about-box">
                <i class="fa-solid fa-award about-icon"></i> 
                <h3 className="about-title">Experience</h3>
                <span className="about-subtitle">3 Years</span>
            </div>

            <div className="about-box">
                <i class="fa-solid fa-briefcase about-icon"></i>
                <h3 className="about-title">Completed</h3>
                <span className="about-subtitle">10+ projects</span>
            </div>

            <div className="about-box">
                <i class="fa-solid fa-headset about-icon"></i>
                <h3 className="about-title">Support</h3>
                <span className="about-subtitle">Online 24/7</span>
            </div>
            
        </div>
    </>
  )
}

export default info