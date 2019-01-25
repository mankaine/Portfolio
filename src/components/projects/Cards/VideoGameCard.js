import React from 'react'
import Card from '../../common/FeaturedProjectCard'
import VideoGameCardArt from './VideoGameCardArt'

const VideoGameCard = props => {
  const bulb = [
    {
      className: 'project-link',
      url: 'https://drive.google.com/drive/u/1/folders/1C5sTDhG2i7QPKfJDvtlF7OW3pPgMqCXy',
      src: './images/link-symbol.svg',
      alt: 'link'
    }
  ]
  const art = < VideoGameCardArt />

  return(
    <Card
      title="Dude, Where's My Ship?"
      description='A mystery/RPG video game about an explorer nagivating  an island full of monsters, and mountains. Suddenly, his ship vanishes out of thin air! Story and features made by myself and four others.'
      techStack='C# - Unity'
      art={art}
      bulbs={bulb}
    />
  )
}

export default VideoGameCard
