import React, { Component } from 'react'
import "./IntroductionText.css"


class IntroductionText extends Component {
  render() {
    return (
      <div className="intro-text-container">
        <h1>Hello!</h1>
        <p>I'm a fourth year Software Engineering major at the University of California, Irvine (expected graduation June 2019).</p>
        <p>Through programs and designs, the opportunity to make the benefits of technology more accessible excites me. I aspire to become a knowledgeable and collaborative full stack developer, focused on user-centric code ranging from intuitive interfaces to faster loading times.</p>
        <p>I’m currenlty seeking full time new grad positions starting in June 2019 or beyond. If you’d like to work together, or are interested in any of the work and projects mentioned below, <a href="mailto:williamkhaine@gmail.com">let’s get in touch!</a></p>
      </div>
    )
  }
}

export default IntroductionText