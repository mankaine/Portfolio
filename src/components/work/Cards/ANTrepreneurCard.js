import React from 'react'
import Card from './Card'
import ANTrepreneurCardArt from './ANTrepreneurCardArt'

const ANTrepreneurCard = props => {
  const bulb = [
    {
      className: 'project-link',
      url: 'http://antrepreneur.uci.edu',
      src: './images/link-symbol.svg',
    }
  ]
  const art = <ANTrepreneurCardArt />

  return(
    <Card
      title='ANTrepreneur Center Website'
      description='Implemented the website redesign for the University of California, Irvine’s, on-campus entrepreneurial resource. Done as part of its rebranding efforts. Provided new features like writer profiles, a blog, and a page promoting the Center’s new office.'
      techStack='HTML - CSS - PHP - Wordpress'
      art={art}
      bulbs={bulb}
    />
  )
}

export default ANTrepreneurCard 
