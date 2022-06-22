import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src="https://i.pinimg.com/564x/a0/1e/b9/a01eb920157d569f0c214bc48ef1dec4.jpg"
              alt="profile pic"
            />
          </div>
          <div className="about-content">
            <h2>About Me</h2>
            <p>
              I am an Administrative Assistant with eight years of experience
              working alongside the executive team of a Fortune 500 company.
              <br /> I am specializing in administrative technology and is
              responsible for educating other employees on using progressive
              systems and applications,
              <br /> including accounting software, mass communication
              procedures and organizational apps.{' '}
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Nariste</span>
                  <br />
                  <span>
                    Sunset str
                    <br />
                    Bishkek, Kyrgyzstan
                  </span>
                  <br />
                  <span>+996555267110</span>
                  <br />
                  <span>narik16@gmail.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About
