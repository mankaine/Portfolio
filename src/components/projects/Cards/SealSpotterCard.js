import React from 'react'
import Card from '../../common/FeaturedProjectCard'
import SealSpotterCardArt from './SealSpotterCardArt'

const SealSpotterCard = props => {
  const art = < SealSpotterCardArt />
  const bulbs = [
    {
      className: 'project-link',
      url: 'https://itunes.apple.com/us/app/seal-spotter/id1451237027?mt=8',
      src: './images/link-symbol.svg',
      alt: 'link'
    },
    {
      className: 'project-link',
      url: 'https://play.google.com/store/apps/details?id=com.sealspotter',
      src: './images/link-symbol.svg',
      alt: 'link'
    },
  ]

  return(
    <Card
      title='Seal Spotter'
      description='A mobile application for both Android and iOS to report sightings of rehabilitated sea life on the West Coast. Developed in a team with four others for the Pacific Marine Mammal Center based in Newport Beach, CA.'
      techStack='React Native - CSS - Javascript - Python - AWS'
      art={art}
      bulbs={bulbs}
    />
  )
}

export default SealSpotterCard 
