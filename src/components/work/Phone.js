import React, { Component } from 'react'
import "./Phone.css"

class Phone extends Component {
  render() {
    return (
      <div className="phone">
        <div className="screen">
          <img className="screenshot" src={`./images/${this.props.projectName}-phone-${this.props.iter}.jpg`} alt='Not available :(' />
        </div>
        <div className="ringer"></div>
        <div className="volume-button up"></div>
        <div className="volume-button down"></div>
        <div className="power-button"></div>
        <div className="home-button"></div>
      </div>
    )
  }
}

export default Phone