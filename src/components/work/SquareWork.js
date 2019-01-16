import React from 'react'
import Work from './Work'
import './SquareWork.css'

const SquareWork = props => {
  const resp = [
    'Expanded the range of processable data during user screening, thereby reducing the need for manual intervention.',
    'Helped to make an internal API more accepted by generating mock responses.',
    'Scarfed down plates of the culinary team\'s meals. Seriously, the food here is amazing.'
  ]

  return(
    <Work 
      title='Square'
      url='https://squareup.com'
      description={'I interned on the Compliance Engineering team at Square during the summer of 2018. Here\'s what I did:'}
      responsibilities={resp}
      imageSrc='./images/square.01.png'
      imageAlt='Square Logo'
      imageClass='square-logo'
    />
  )
}

export default SquareWork