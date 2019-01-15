import React from 'react'
import Card from './Card'
import LatteLogCardArt from './LatteLogCardArt';

const LatteLogCard = props => {
  const bulbs = [
    {
      className: 'github-link',
      url: 'https://github.com/mankaine/latte-log',
      src: './images/github.png',
    },
    {
      className: 'project-link',
      url: 'https://latte-log.herokuapp.com',
      src: './images/link-symbol.svg',
    }
  ]
  const art = < LatteLogCardArt />

  return(
    <Card
      title='Latte Log'
      description='A page for posting adventures in making latte art. Includes uploading images, noting attempts, and saving videos that are helpful resources in making coffee.'
      techStack='Ruby - Ruby on Rails - HTML - CSS - SCSS - Javascript - Heroku'
      bulbs={bulbs}
      art={art}
    />
  )
}

export default LatteLogCard
