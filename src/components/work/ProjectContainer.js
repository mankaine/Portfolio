import React, { Component } from 'react'
import './ProjectContainer.css'
import NoScreenshotProject from './NoScreenshotProject'
import SectionTitle from '../SectionTitle'
import LatteLogCard from './Cards/LatteLogCard'
import SealSpotterCard from './Cards/SealSpotterCard';
import VideoGameCard from './Cards/VideoGameCard'
import ANTrepreneurCard from './Cards/ANTrepreneurCard';
import NewProject from './NewProject'

class ProjectContainer extends Component {
  constructor(props) {
    super(props)

    React.statics = {
      medium: {
        isPhoneOnly: 0,
        isComputerOnly: 1,
        isCrossPlatform: 2,
        noScreenshot: 3,
        project: 4
      }
    }

    this.state = {
      otherProjects: [
        {
          name: "Spot",
          shortname: "spot",
          crossPlatform: React.statics.medium.noScreenshot,
          text: 'An iOS app I worked on with my roomate to record IOUs, make requests, and fulfill payments.',
          tech: "Swift, Firebase",
          url: "https://github.com/winstonlan/Spot"
        },
        {
          name: "Check Up",
          shortname: 'chup',
          crossPlatform: React.statics.medium.noScreenshot,
          text: 'Geared towards the forgetful and elderly, Check Up is a health and wellness that app that notifies users and their support network when to take medication.',
          tech: "HTML, CSS, Javascript, React Native",
          url: "https://github.com/mankaine/hackuci2018",
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <div className='projects-and-work-container'>
          <a className="anchor" id="work"></a>
          <SectionTitle text="Work and Projects" />
          <div className='featured-projects-container' >
            <NewProject card={ <LatteLogCard /> } desktopImage='./images/latte-desktop.png' mobileImage='./images/latte-phone.png' />
            <NewProject card={ <SealSpotterCard /> }  mobileImage='./images/seal-phone.jpg' />
            <NewProject card={ <VideoGameCard /> } desktopImage='./images/video-game-desktop.png' />
            <NewProject card={ <ANTrepreneurCard /> } desktopImage='./images/ant-desktop.jpg' mobileImage='./images/ant-phone.jpg' />
          </div>
          <div className='secondary-projects-container'>
            {
              this.state.otherProjects.map(
                function (e, i) {
                  return (<NoScreenshotProject name={e.name} url={e.url} text={e.text} shortname={e.shortname} key={i} styles={e.styles} tech={e.tech} buttonText={e.buttonText} />)
                }
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectContainer
