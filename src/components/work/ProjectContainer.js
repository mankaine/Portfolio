import React from 'react'
import './ProjectContainer.css'
import SectionTitle from '../SectionTitle'
import LatteLogCard from './Cards/LatteLogCard'
import SealSpotterCard from './Cards/SealSpotterCard';
import VideoGameCard from './Cards/VideoGameCard'
import ANTrepreneurCard from './Cards/ANTrepreneurCard';
import SpotCard from './Cards/SpotCard'
import CheckUpCard from './Cards/CheckUpCard'
import DadCard from './Cards/DadCard'
import NewProject from './Project'

const ProjectContainer = () => {
  return (
    <div>
      <div className='projects-and-work-container'>
        <a className="anchor" id="work"></a>
        <SectionTitle text='Projects' />
        <div className='featured-projects-container' >
          <h2 style={{'width': '80%', 'marginLeft': '10%'}}>Featured Projects</h2>
          <NewProject card={ <LatteLogCard /> } desktopImage='./images/latte-desktop.png' mobileImage='./images/latte-phone.png' />
          <NewProject card={ <SealSpotterCard /> }  mobileImage='./images/seal-phone.jpg' />
          <NewProject card={ <VideoGameCard /> } desktopImage='./images/video-game-desktop.png' />
          <NewProject card={ <ANTrepreneurCard /> } desktopImage='./images/ant-desktop.jpg' mobileImage='./images/ant-phone.jpg' />
        </div>
        <div className='secondary-projects-container'>
          <h2 style={{'width': '100%'}}>More Projects</h2>
          <SpotCard />
          <CheckUpCard />
          <DadCard />
        </div>
      </div>
    </div>
  )
}

export default ProjectContainer
