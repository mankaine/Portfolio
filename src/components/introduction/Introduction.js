import React, { Component } from 'react';
import './Introduction.css'
import IntroductionText from './IntroductionText'
import IntroductionLinks from './IntroductionLinks'
import IntroductionHeadshot from './IntroductionHeadshot';

class Introduction extends Component {
  render() {
    return (
      <div className="intro-wrapper" >
        <a className="anchor" id="about"></a>
        <div className='intro'>
          <IntroductionHeadshot />
          <IntroductionText />
          <IntroductionLinks />
        </div>
      </div>
    )
  }
}

export default Introduction