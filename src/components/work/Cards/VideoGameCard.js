import React from 'react'
import Card from './Card'
import VideoGameCardArt from './VideoGameCardArt'

const VideoGameCard = props => {
  const art = < VideoGameCardArt />
  return(
    <Card
      title="Dude, Where's My Ship?"
      description='A mystery/RPG video game about an explorer nagivating  an island full of monsters, and mountains. Suddenly, his ship vanishes out of thin air! Story and features made by myself and four others.'
      techStack='C# - Unity'
      art={art}
    />
  )
}

export default VideoGameCard
