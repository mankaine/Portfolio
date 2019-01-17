import React from 'react'
import Work from './Work'
import './SquareWork.css'

const SquareWork = props => {
  const resp = [
    'Reduced engineers\' on call burden by detecting, resolving, and reprocessing data that failed initial user screening.',
    'Supported updates for an API which connects teams to Compliance Engineering\'s services by generating mock responses.',
    'Scarfed down plates of the culinary team\'s meals. Seriously, the food here is amazing.'
  ]

  return(
    <Work 
      title='Square'
      url='https://squareup.com'
      description={'During the summer of 2018, I was fortunate enough to intern on the Compliance Engineering team, which is responsible for regulating user behavior on Square\'s various platforms. On top of learning a ton, here\'s what I did:'}
      responsibilities={resp}
      imageSrc='./images/square.01.png'
      imageAlt='Square Logo'
      imageClass='square-logo'
    />
  )
}

export default SquareWork