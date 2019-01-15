import React from 'react'
import Card from '../../common/Card'

const DadCard = props => {
  const bulb = [
    {
      className: 'github-link',
      url: 'https://github.com/mankaine/hackuci2018',
      src: './images/github.png',
      alt: 'github-logo'
    },
    {
      className: 'project-link',
      url: 'https://mankaine.github.io/dad-joke-gen/',
      src: './images/link-symbol.svg',
      alt: 'link'
    }
  ]

  return(
    <Card
      title='Dad Joke Generator'
      description='Randomly selects Dad Jokes (yes, people like them) from Reddit and provides the ability to tweet them.'
      techStack='HTML - CSS - Javascript - jQuery - Twitter API - Reddit API'
      bulbs={bulb}
    />
  )
}

export default DadCard
