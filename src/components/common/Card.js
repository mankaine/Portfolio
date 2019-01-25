import React from 'react'
import './Card.css'
import BulbContainer from './BulbContainer'

const Card = props => {
  return(
    <div className={`${props.className} card`}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      { props.art }
      <p className='tech-stack'>{`Technologies Used: ${props.techStack}`}</p>
      <BulbContainer bulbs={props.bulbs} />
    </div>
  )
}

export default Card
