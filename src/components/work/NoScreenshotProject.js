import React from 'react'
import "./Project.css"
import Project from './Project'
import './NoScreenShotProject.css'
import './Project.css'

class NoScreenshotProject extends Project {
  constructor(props) {
    super(props)
  }

  showButtonIfURLAvailable = () => {
    if (this.props.url) {
      return (
        <div className='project-link'>
          <a href={this.props.url} target="_blank">
            {this.props.buttonText || 'View Project'}
          </a>
        </div>
      )
    }
    return <br />
  }

render() {
  return (
    <div style={this.state.styles} className="other-project">
      <h3 className="title">{this.state.name}</h3>
      <hr />
      <p>{this.props.text}</p>
      <p className="project-tech">{`Technologies used: ${this.props.tech}`}</p>
      {this.showButtonIfURLAvailable()}
    </div>
  );
}

}

export default NoScreenshotProject