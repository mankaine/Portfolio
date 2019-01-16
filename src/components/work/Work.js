import React from 'react'
import './Work.css'

const generateResponsibilities = props => {
  if (props.responsibilities) {
    return(
      <ul>
        {
          props.responsibilities.map(function(e, i) {
              return(<li key={i}>{e}</li>)
            }
          )
        }
      </ul>
    )
  }
  return (<p></p>)
}

const Work = props => {
  return(<div className='work'>
    <img className={props.imageClass} src={props.imageSrc} alt={props.imageAlt}></img>
    <a href={props.url} target='_blank' rel='noopener noreferrer'>
      <h2><span className='title-content'>{props.title}</span></h2>
    </a>
    <p className='description'>{props.description}</p>
    {generateResponsibilities(props)}
  </div>)
}

export default Work