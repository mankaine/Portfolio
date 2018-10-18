import React, { Component } from 'react';
import "./Project.css"
import Laptop from './Laptop'
import Phone from './Phone'

class MultiPlatformProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.name,
      shortname: props.shortname,
      styles: props.styles,
    }
  }

  render() {
    return (
      <div style={this.state.styles} className="project">
        <h3 className="title">{this.state.name}</h3>
        <hr />
        <div className="display">
          <Laptop projectName={this.state.shortname} />
          <Phone projectName={this.state.shortname} iter={1} />
        </div>
        <p className="project-text" >{this.props.text}</p>
        <p className="project-tech">{`Technologies used: ${this.props.tech}`}</p>
        <p className="project-link">
          <a href={this.props.url} target="_blank">
            {this.props.buttonText || 'View Project'}
          </a>
        </p>
      </div>
    );
  }
}

export default MultiPlatformProject