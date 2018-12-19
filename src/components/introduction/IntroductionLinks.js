import React, { Component } from 'react';
import "./IntroductionLinks.css"

class IntroductionLinks extends Component {
  render() {
    return (
      <div className="reference-container">
        <div className="link-container">
          <a href="https://github.com/mankaine" target='_blank' rel='noopener noreferrer'>
            <img className="reference-style" alt="GitHub" src="./images/github.png" />
          </a>
          <a href="https://github.com/mankaine" target='_blank' rel='noopener noreferrer'>
            <p className="link-text">mankaine</p>
          </a>
        </div>
        <div className="link-container">
          <a href="https://www.linkedin.com/in/williamthankhaine/" target='_blank' rel='noopener noreferrer'>
            <img className="reference-style" alt="Linkedin" src="./images/linkedin.png" />
          </a>
          <a href="https://www.linkedin.com/in/williamthankhaine/" target='_blank' rel='noopener noreferrer'>
            <p className="link-text">williamthankhaine</p>
          </a>
        </div>
        <div className="link-container">
          <a href="mailto:williamkhaine@gmail.com" target='_blank' rel='noopener noreferrer'>
            <img className="reference-style" alt="E-mail" src="./images/email.png" />
          </a>
          <a href="mailto:williamkhaine@gmail.com" target='_blank' rel='noopener noreferrer'>
            <p className="link-text">williamkhaine@gmail.com</p>
          </a>
        </div>
        <div className="link-container">
          <a href="./images/WilliamThanKhaineResume.pdf" target='_blank' rel='noopener noreferrer'>
            <img className="reference-style" alt="Resume" src="./images/resume.png" />
          </a>
          <a href="./images/WilliamThanKhaineResume.pdf" target='_blank' rel='noopener noreferrer'>
            <p className="link-text">Resume</p>
          </a>
        </div>
      </div>
    )
  }
}

export default IntroductionLinks
