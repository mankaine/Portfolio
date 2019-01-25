import React from 'react'
import FeaturedProjectCard from '../../common/FeaturedProjectCard'
import ANTrepreneurCardArt from './ANTrepreneurCardArt'

const ANTrepreneurCard = props => {
  const bulb = [
    {
      className: 'project-link',
      url: 'http://antrepreneur.uci.edu',
      src: './images/link-symbol.svg',
      alt: 'link'
    }
  ]
  const art = <ANTrepreneurCardArt />

  return(
    <FeaturedProjectCard
      title='ANTrepreneur Center Website'
      description='Implemented the website redesign, providing new features like a blog, writer profiles, and a page promoting the Center’s new office.'
      techStack='HTML - CSS - PHP - Wordpress'
      art={art}
      bulbs={bulb}
    />
  )
}

export default ANTrepreneurCard 
