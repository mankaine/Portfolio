import React, { Component } from 'react'
import "./IntroductionText.css"


class IntroductionText extends Component {
  render() {
    return (
      <div className="intro-text-container">
        <h1>Hello, there!</h1>
        <h2>I'm Will, and I build web apps.</h2>
        <p>I'm a fourth year Software Engineering major at the University of California, Irvine (expected graduation June 2019). I strive to build quality applications in solo and team environments.</p>
        <p>By writing and designing programs, I hope to make technology more empowering and intuitive. Most projects have been front end heavy, but I'm excited with working on full stack applications.</p>
        <p>I’m currently seeking full time new grad positions starting in June 2019 or beyond. If you’d like to work together, or would just like to chat, <a href="mailto:williamkhaine@gmail.com">let’s get in touch!</a></p>
      </div>
    )
  }
}

export default IntroductionText