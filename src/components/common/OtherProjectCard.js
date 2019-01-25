import Card from './Card'
import React from 'react'
import './OtherProjectCard.css'

const OtherProjectCard = props => {
  return(
    <Card
      className='other-project-card'
      title={props.title}
      description={props.description}
      techStack={props.techStack}
      art={props.art}
      bulbs={props.bulbs}
    />
  )
}

export default OtherProjectCard
