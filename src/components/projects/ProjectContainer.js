import './ProjectContainer.css'
import ANTrepreneurCard from './Cards/ANTrepreneurCard';
import CheckUpCard from './Cards/CheckUpCard'
import DadCard from './Cards/DadCard'
import DataStructuresCard from './Cards/DataStructuresCard'
import LatteLogCard from './Cards/LatteLogCard'
import Project from './Project'
import React from 'react'
import SectionTitle from '../common/SectionTitle'
import SpotCard from './Cards/SpotCard'
import SealSpotterCard from './Cards/SealSpotterCard';
import VideoGameCard from './Cards/VideoGameCard'

const ProjectContainer = () => {
  return (
    <div>
      <div className='projects-and-work-container'>
        <button className="anchor" id="projects"></button>
        <SectionTitle text='Portfolio' />
        <div className='featured-projects-container' >
          <h2 style={{'width': '80%', 'marginLeft': '10%'}}>Featured Projects</h2>
          <Project card={ <LatteLogCard /> } desktopImage='./images/latte-desktop.png' mobileImage='./images/latte-phone.png' />
          <Project card={ <SealSpotterCard /> }  mobileImage='./images/seal-phone.jpg' />
          <Project card={ <VideoGameCard /> } desktopImage='./images/video-game-desktop.png' />
          <Project card={ <ANTrepreneurCard /> } desktopImage='./images/ant-desktop.jpg' mobileImage='./images/ant-phone.jpg' />
        </div>
        <div className='secondary-projects-container'>
          <h2 style={{'width': '100%'}}>More Projects</h2>
          <SpotCard />
          <CheckUpCard />
          <DadCard />
          <DataStructuresCard />
        </div>
      </div>
    </div>
  )
}

export default ProjectContainer
