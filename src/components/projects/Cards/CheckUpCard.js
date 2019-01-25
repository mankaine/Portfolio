import React from 'react'
import OtherProjectCard from '../../common/OtherProjectCard'

const CheckUpCard = props => {
  const bulb = [
    {
      className: 'github-link',
      url: 'https://github.com/mankaine/hackuci2018',
      src: './images/github.png',
      alt: 'github-logo'
    }
  ]

  return(
    <OtherProjectCard
      title='Check Up'
      description='Geared towards the forgetful and elderly, Check Up is a health and wellness that app that notifies users and their support network when to take medication.'
      techStack='HTML - CSS - Javascript - React Native'
      bulbs={bulb}
    />
  )
}

export default CheckUpCard
