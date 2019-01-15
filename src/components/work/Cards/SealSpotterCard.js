import React from 'react'
import Card from './Card'
import SealSpotterCardArt from './SealSpotterCardArt'

const SealSpotterCard = props => {
  const art = < SealSpotterCardArt />
  return(
    <Card
      title='Seal Spotter'
      description='A mobile application for both Android and iOS to report sightings of rehabilitated sea life on the West Coast. Developed by a team with four others for the Pacific Marine Mammal Center based in Newport Beach, CA.'
      techStack='React Native - CSS - Javascript - Python - AWS'
      art={art}
    />
  )
}

export default SealSpotterCard 
