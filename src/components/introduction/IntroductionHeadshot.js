import React, { Component } from 'react'
import './IntroductionHeadshot.css'

class IntroductionHeadshot extends Component {
  render() {
    return (
      <div className="headshot-container" >
        <img className="headshot" src="./images/headshot.jpg" alt="headshot" />
      </div>
    )
  }
}

export default IntroductionHeadshot