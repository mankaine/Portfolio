import React, { Component } from 'react'
import './Card.css'

class Card extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='card'>
        <h1>Latte Log</h1>
        <p>A page for posting adventures in making latte art. Includes uploading images, noting attempts, and saving videos that are helpful resources in making coffee.</p>
        <p className='tech-stack'>Technologies Used: Ruby - Ruby on Rails - HTML - CSS - Javascript - Heroku</p>
        <div className='bulb-container'>
          <a className='github-link' target='_blank' rel="noopener noreferrer" href='https://github.com/mankaine/latte-log'>
            <img className='bulb-logo' src='./images/github.png'></img>
            <img className='bulb' src='./images/bulb.svg'></img>
          </a>
          <a className='project-link' target='_blank' rel="noopener noreferrer" href='https://latte-log.herokuapp.com'>
            <img className='bulb-logo' src='./images/link-symbol.svg'></img>
            <img className='bulb' src='./images/bulb.svg'></img>
          </a>
        </div>
        <img className='color larger' src='./images/Oval1.svg'></img>
        <img className='color smaller' src='./images/Oval2.svg'></img>
      </div>
    )
  }
}

export default Card