import React from 'react'
import './Bulb.css'

const Bulb = props => {
  return (<a className={props.className} target='_blank' rel='noopener noreferrer' href={props.url}>
      <img className='bulb-logo' src={props.src}></img>
      <img className='bulb' src='./images/bulb.svg'></img>
    </a>
  )
}

export default Bulb