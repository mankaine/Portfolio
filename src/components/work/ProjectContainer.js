import React, { Component } from 'react'
import './ProjectContainer.css'
import Project from './Project'
import MultiPlatformProject from './MultiPlatformProject'
import MobileProject from './MobileProject'
import NoScreenshotProject from './NoScreenshotProject'
import SectionTitle from '../SectionTitle'

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
      featuredProjects: [
        {
          name: 'Seal Spotter',
          shortname: 'seal',
          crossPlatform: React.statics.medium.isPhoneOnly,
          url: 'https://www.pacificmmc.org',
          text: 'A mobile application for both Android and iOS to report sightings of rehabilitated sea life on the West Coast. Developed by a team with four others for the Pacific Marine Mammal Center based in Newport Beach, CA.',
          tech: 'Amazon Web Services, Javascript, Python, React Native',
          buttonText: 'Learn More About the PMMC'
        },
        {
          name: "Software Engineering Internship at Square, Inc.",
          shortname: "sq",
          crossPlatform: React.statics.medium.isCrossPlatform,
          url: "https://squareup.com",
          text: "I interned on the Compliance Engineering team, where I learned how to become a more productive, compassionate, and collaborative developer. I worked on internal tools and: reduced the need for manual intervention during user screening by expanding the range of processed data; addressed abuse of privacy law that would render report generation moot, by documenting and writing integration of internal services; scarfed down plates of the culinary team’s meals. Seriously, the food here is amazing.",
          tech: "Ruby, Ruby on Rails, RSpec, Protocol Buffers",
          buttonText: 'Learn More About Square'
        },
        {
          name: "ANTrepreneur Center Website",
          shortname: "ant",
          crossPlatform: React.statics.medium.isCrossPlatform,
          url: "http://antrepreneur.uci.edu",
          text: 'Implemented the website redesign for the University of California, Irvine’s, on-campus entrepreneurial resource. Done as part of its rebranding efforts. Provided new features like writer profiles, a blog, and a page promoting the Center’s new office.',
          tech: "HTML, CSS, Bootstrap, Wordpress",
        },
        {
          name: "Schemed",
          shortname: "schemed",
          crossPlatform: React.statics.medium.isCrossPlatform,
          text: 'Schemed is a passion project with two other friends; currently in development, it aims to provide a cleaner, more through way of planning events than most scheduling apps today.',
          url: "https://schemed.io",
          tech: "HTML, CSS, Javacscript, React.js",
        },
        {
          name: "Dad Joke Generator",
          shortname: "dad",
          crossPlatform: React.statics.medium.isCrossPlatform,
          text: 'Laugh (or cringe) to jokes from the Dad Jokes subreddit, and share it through Twitter.',
          tech: "HTML, CSS, Javascript, Bootstrap, Reddit API, Twitter API",
          url: "https://mankaine.github.io/dad-joke-gen",
        },
      ],
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
      <div className='projects-and-work-container'>
        <a className="anchor" id="work"></a>
        <SectionTitle text="Work and Projects" />
        <div classname='project-list-container'>
          {
            this.state.featuredProjects.map(
              function (e, i) {
                if (e.crossPlatform === React.statics.medium.isPhoneOnly) {
                  return (<MobileProject name={e.name} url={e.url} text={e.text} shortname={e.shortname} key={i} styles={e.styles} tech={e.tech} buttonText={e.buttonText}/>)
                } else if (e.crossPlatform === React.statics.medium.noScreenshot) {
                  return (<NoScreenshotProject name={e.name} url={e.url} text={e.text} shortname={e.shortname} key={i} styles={e.styles} tech={e.tech} buttonText={e.buttonText}/>)
                } else if (e.crossPlatform === React.statics.medium.isCrossPlatform) {
                  return (<MultiPlatformProject name={e.name} shortname={e.shortname} url={e.url} text={e.text} key={i} styles={e.styles} tech={e.tech} buttonText={e.buttonText}/>)
                } else {
                  return (<Project name={e.name} shortname={e.shortname} url={e.url} text={e.text} key={i} styles={e.styles} tech={e.tech} buttonText={e.buttonText}/>)
                }
              }
            )
          }
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
    );
  }
}

export default ProjectContainer
