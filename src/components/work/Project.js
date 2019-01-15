import React, { Component } from 'react'
import './Project.css'

const selectDesktop = props => {
  return selectImage(props.desktopImage, 'desktop')
}

const selectMobile = props => {
  if (props.desktopImage) {
    return selectImage(props.mobileImage, 'mobile')
  }
  const forceStay = { 'display': 'block' }
  return selectImage(props.mobileImage, 'mobile', forceStay)
}

const selectImage = (imageSrc, className, additionalStyles={}) => {
  if (imageSrc) {
    return (<img className={className} src={imageSrc} style={additionalStyles}></img>)
  }
  return (<p></p>)
}

const Project = props => { 
  return(
    <div className='new-project-container'>
      { props.card }
      { selectDesktop(props) }
      { selectMobile(props) }
    </div>
  )
}

export default Project