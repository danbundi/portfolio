import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <>
    <section className="contact section" id="contact">
      <h2 className="section_title">Get in touch</h2>
      <span className="section_subtitle">Contact Me</span>


      <div className="contact_container container grid">
        {/* content one */}
        <div className="contact_content">
          <h3 className="contact_title">Talk to me</h3>

          <div className="contact_info">
            {/* card 1 */}
            <div className="contact_card">
              <i className="bx bx-mail-send contact_card-icon"></i>

              <h3 className="contact_card-title">Email</h3>
              <span className="contact_card-data">dienbi@gmail.com</span>

              <a href="#" className="contact_button">Write me <i className="bx bx-right-arrow-alt contact_button-icon"></i></a>
            </div>

            {/* card 2 */}
            <div className="contact_card">
              <i className="bx bxl-whatsapp contact_card-icon"></i>

              <h3 className="contact_card-title">Whatsapp</h3>
              <span className="contact_card-data">+254 734 687 324</span>

              <a href="#" className="contact_button">Write me <i className="bx bx-right-arrow-alt contact_button-icon"></i></a>
            </div>

            {/* card 3 */}
            <div className="contact_card">
              <i className="bx bxl-messenger contact_card-icon"></i>

              <h3 className="contact_card-title">Messenger</h3>
              <span className="contact_card-data">user.fb324</span>

              <a href="#" className="contact_button">Write me <i className="bx bx-right-arrow-alt contact_button-icon"></i></a>
            </div>
          </div>
        </div>

        <div className="contact_content">
          <h3 className="contact_title">Write me your project</h3>

          <form action="" className="contact_form">
            <div className="contact_form-div">
              <label htmlFor="" className="contact_form-tag">Name</label>
              <input type="text" name="name" id="" className='contact_form-input' placeholder='Insert Your Name' />
            </div>

            <div className="contact_form-div">
              <label htmlFor="" className="contact_form-tag">Mail</label>
              <input type="email" name="email" id="" className='contact_form-input' placeholder='Insert Your Email' />
            </div>

            <div className="contact_form-div contact_form-area">
              <label htmlFor="" className="contact_form-tag">Project</label>
              <textarea name="project" cols="30" rows="10" className='contact_form-input' placeholder='Please write your project here'></textarea>
            </div>

            <button className="contact-button"><a href="#" className='button button-flex'>Send message <i class="uil uil-message contact_button-icon"></i></a></button>
          </form>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact