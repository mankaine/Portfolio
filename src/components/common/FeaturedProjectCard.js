import Card from './Card'
import React from 'react'
import './FeaturedProjectCard.css'

const FeaturedProjectCard = props => {
  return(
    <Card
      className='featured-project-card'
      title={props.title}
      description={props.description}
      techStack={props.techStack}
      art={props.art}
      bulbs={props.bulbs}
    />
  )
}

export default FeaturedProjectCard
