import React from 'react'
import './Qualification.css'

const Qualification = () => {
  return (
    <>
    <section className="qualification section">
        <h2 className="section_title">Qualification</h2>
        <span className="section_subtitle">My Personel journey</span>

        <div className="qualification_container container">
            <div className="qualification_tabs">
                <div className="qualification_button qualification_active button--flex">
                    <i className="uil uil-graduation-cap qualification_icon"></i> Education
                </div>

                <div className="qualification_button button--flex">
                    <i className="uil uil-briefcase-alt qualification_icon"></i> Experience
                </div>
            </div>

            <div className="qualification_sections">
                {/** Content 1 */}
                <div className="qualification_content qualification_content-active">
                    {/** data 1 */}
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Web Design</h3>
                            <span className="qualification_subtitle">Spain - Institute</span>

                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i> 2021 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    {/** data 2 */}
                    <div className="qualification_data">
                        <div></div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>

                        <div>
                            <h3 className="qualification_title">Art Director</h3>
                            <span className="qualification_subtitle">Spain - Institute</span>

                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i> 2020 - 2021
                            </div>
                        </div>
                    </div>

                    {/** data 3 */}
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Web Development</h3>
                            <span className="qualification_subtitle">Spain - Institute</span>

                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i> 2018 - 2020
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    {/** data 4 */}
                    <div className="qualification_data">
                        <div></div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>

                        <div>
                            <h3 className="qualification_title">UX Expert</h3>
                            <span className="qualification_subtitle">Spain - Institute</span>

                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i> 2017 - 2018
                            </div>
                        </div>
                    </div>
                </div>

                {/** Content 2 */}
                <div className="qualification_content">
                    {/** data 1 */}
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Product Designer</h3>
                            <span className="qualification_subtitle">Microsoft - Spain</span>

                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i> 2021 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    {/** data 2 */}
                    <div className="qualification_data">
                        <div></div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>

                        <div>
                            <h3 className="qualification_title">UX Designer</h3>
                            <span className="qualification_subtitle">Apple Inc - Spain</span>

                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i> 2020 - 2021
                            </div>
                        </div>
                    </div>

                    {/** data 3 */}
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Web Designer</h3>
                            <span className="qualification_subtitle">Figma - Spain</span>

                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i> 2018 - 2020
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Qualification