import React, { Component } from 'react'

class Resume extends Component {
  render() {
    

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h2>University</h2>
                <p>Master in Day Nap • April 2007</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
            <div className="inner-link">
              <a href="https://www.traackr.com/">Traackr.com</a>
              <a href="https://www.soundstripe.com/">Soundstripe.com</a>
              <a href="https://www.alley.com/">Alley.com</a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Resume
