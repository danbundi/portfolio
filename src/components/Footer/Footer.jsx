import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Dan</h1>

            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer_link">Portfolio</a>
                </li>
                <li>
                    <a href="#testimonials" className="footer_link">Testimonials</a>
                </li>
            </ul>

            <div className="footer_social">
                <a className='f-link' href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
                <i className="uil uil-linkedin"></i>
                </a>

                <a className='f-link' href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
                <i className="uil uil-instagram"></i>
                </a>

                <a className='f-link' href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
                <i className="uil uil-twitter"></i>
                </a>

                <a className='f-link' href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
                <i className="uil uil-github"></i>
                </a>
            </div>

            <span className='footer_copy'>&#169; DIENBi. All rights reserved</span>
        </div>
    </footer>
    </>
  )
}

export default Footer