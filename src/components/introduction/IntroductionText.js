import React, { Component } from 'react'
import "./IntroductionText.css"


class IntroductionText extends Component {
  render() {
    return (
      <div className="intro-text-container">
        <h1>Hello!</h1>
        <p>I'm a fourth year Software Engineering major at the University of California, Irvine (expected graduation June 2019). I strive to build quality applications in solo and team environments.</p>
        <p>By writing and designing programs, I hope to make technology more empowering and intuitive. I focus on the front end, but have experience as a full stack software engineer.</p>
        <p>I’m currently seeking full time new grad positions starting in June 2019 or beyond. If you’d like to work together, or are interested in any of projects below, or think I could help you out, <a href="mailto:williamkhaine@gmail.com">let’s get in touch!</a></p>
      </div>
    )
  }
}

export default IntroductionText