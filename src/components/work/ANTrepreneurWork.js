import React from 'react'
import Work from './Work'
import './ANTrepreneurWork.css'

const ANTrepreneurWork = props => {
  const resp = [
    'Implemented the site facelift as part of the Center\'s rebranding strategy.',
    'Created a native blog page to showcase student entrepreneurs and drive site traffic.',
    'Promoted the new office available for student startups and create revenue opportunities for the Center.',
    'Interviewed and wrote about student businesses, and led writing, editing, and publishing of monthly e-newsletter.'
  ]

  return(
    <Work 
      title='UCI ANTrepreneur Center'
      url='http://antrepreneur.uci.edu'
      description={'The on-campus resource for entrepreneurs at the University of California, Irvine. During my two and a half years there, here\'s what I did:'}
      responsibilities={resp}
      imageSrc='./images/ac-logo.svg'
      imageAlt='Antrepreneur Center Logo'
      imageClass='antrepreneur-logo'
    />
  )
}

export default ANTrepreneurWork