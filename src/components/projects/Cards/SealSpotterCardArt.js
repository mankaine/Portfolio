import React from 'react'
import './SealSpotterCardArt.css'

const SealSpotterCardArt = props => {
  return(
    <div className='seal-spotter-card-art'>
      <img className='color larger' src='./images/seal-spotter-larger.svg' alt=''></img>
      <img className='color smaller' src='./images/seal-spotter-smaller.svg' alt=''></img>
    </div>
  )
}

export default SealSpotterCardArt
