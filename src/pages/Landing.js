import React from 'react'
import { useEffect, useRef } from 'react';
import photo from "../assets/photo.png"
import { Link } from 'react-router-dom'
import { UilInstagram, UilTwitter, UilGithub } from '@iconscout/react-unicons';
import Navbar from '../components/Navbar';
import gsap from 'gsap';
import '../styles/landing.css'

const Landing = () => {
  const desRef = useRef();

  useEffect(() => {
    gsap.from(desRef.current, {
      opacity: 0,
      duration: 2,
      ease: "power2.out"
    });
  }, []);


  return (
    <>
        <main className='main'>
          <Navbar></Navbar>

            <div className="landing-page">
              <div className="wrapper">
                <div className="socials">
                  <a className='s-link' href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
                    <i className="uil uil-linkedin"></i>
                  </a>
                  <a className='s-link' href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
                    <i className="uil uil-instagram"></i>
                  </a>
                  <a className='s-link' href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
                    <i className="uil uil-twitter"></i>
                  </a>
                  <a className='s-link' href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
                    <i className="uil uil-github"></i>
                  </a>
                </div>

                <div className="image">
                </div>

                <div className="word">
                  <h2 className='title'>Daniel Bundi 🙂</h2>

                  <h3 useRef={desRef} className='subtitle'>Web Developer </h3>
                  <p className="description">HTML | REACT | GSAP | JS | CSS | 3.JS</p>
                  <p className="description">I build modern, responsive, and visually engaging websites with a passion for crafting immersive, user-focused digital products on the path to full-stack software development."
                  </p>

                  <button className="hello-button"><a href="#" className='button button-flex'>Say Hello <i class="uil uil-message hello-icon"></i></a></button>
                </div>
              </div>

              <div className="Scroll">
                <a href="" className="scroll button--flex">
                    <i class="fa-solid fa-computer-mouse icon"></i>

                    <span className='scroll-name'>Scroll Down</span>

                    <i className='uil uil-arrow-down home_scroll-arrow'></i>
                </a>
              </div>
            </div>
        </main>
    </>
  )
}

export default Landing

/*
<span>HI, MY NAME IS</span>
<h1>daniel bundi</h1>
<h3>Creative Web Developer Turning Ideas Into Interactive Experiences</h3>
<p>I build modern, responsive, and visually engaging websites using HTML, CSS, JavaScript, React, GSAP, and Three.js — with a passion for crafting immersive, user-focused digital products on the path to full-stack software development.</p>
*/