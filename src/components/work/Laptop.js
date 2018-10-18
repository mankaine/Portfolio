import React, { Component } from 'react'
import "./Laptop.css"

class Laptop extends Component {
  render() {
    return (
      <div className="laptop">
        <div className="top">
          <div className="screen">
            <img className="screenshot" src={`./images/${this.props.projectName}-laptop.jpg`} alt="Not available :(" />
          </div>
        </div>
        <div className="keyboard">
          <div className="lifter"></div>
        </div>
        <div className="bottom"></div>
      </div>
    )
  }
}

export default Laptop