import React from 'react'
import Project from './Project'
import './Project.css'
import Phone from './Phone'

class MultiPlatformProject extends Project {
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
        <div className='container'>
          <div className='display'>
            <Phone projectName={this.state.shortname} iter={1} />
          </div>
          <div className='text'>
            <p className="project-text">{this.props.text}</p>
            <p className="project-tech">{`Technologies used: ${this.props.tech}`}</p>
            <p className="project-link">
              <a href={this.props.url} target="_blank" rel='noopener noreferrer'>
                {this.props.buttonText || 'View Project'}
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default MultiPlatformProject