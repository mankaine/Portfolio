import React from 'react'
import Bulb from './Bulb'
import './BulbContainer.css'

const generateBulbs = bulbs => {
  if (bulbs == null ) {
    return(<p className='dummy'></p>)
  }

  return bulbs.map(function(link, i) {
    return <Bulb className={link.className} url={link.url} src={link.src} key={i} alt={link.alt} />
  })
}

const BulbContainer = props => {
  return(
    <div className='bulb-container'>
      { generateBulbs(props.bulbs) }
    </div>
  )
}

export default BulbContainer
