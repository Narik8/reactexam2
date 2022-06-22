import React, { Component } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
class Header extends Component {
  
  render() {
    return (
      <header id="home">
        <nav id="nav-wrap">
          
            
            <ul id="nav" className="nav">
            <li>
              <Link
                
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="smoothscroll"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="smoothscroll"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="resume"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="smoothscroll"
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="smoothscroll"
              >
                Contact
              </Link>
            </li>
          </ul>
          
          
        </nav>

        <div id="home" className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">Hello!</h1>
            <h3>
              My name is Nariste. I am flexible, reliable and possess excellent
              time keeping skills. I am an enthusiastic, self-motivated,
              reliable, responsible and hard working person. I am a mature team
              worker and adaptable to all challenging situations. I am able to
              work well both in a team environment as well as using own
              initiative..
            </h3>
            <hr />
          </div>
        </div>

        
      </header>
    )
  }
}

export default Header
