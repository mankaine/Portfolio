import React, { Component } from 'react'
import './ProjectContainer.css'
import Project from './Project'
import MultiPlatformProject from './MultiPlatformProject'
import NoScreenshotProject from './NoScreenshotProject'
import SectionTitle from '../../SectionTitle'

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
          name: "ANTrepreneur Center Website",
          shortname: "ant",
          crossPlatform: React.statics.medium.project,
          url: "http://antrepreneur.uci.edu",
          text: "I implemented designs to ensure that the website of the UC Irvine's ANTrepreneur Center was consistent with its new branding guidelines. Also laying foundational work for the site's blog and new location page, I implemented user testing of multiple designs while working with directors and interns at the center, ultimately improving usability.",
          tech: "HTML, CSS, Bootstrap, Wordpress",
        },
        {
          name: "Schemed",
          shortname: "schemed",
          crossPlatform: React.statics.medium.project,
          text: "Schemed is a passion project I'm building with some friends. Right now, I'm working on the front end, but when it is finished, Schemed will provide users a fully integrated way of coordinating meetings and hangouts. Most event planning applications based on availability struggle with aesthetics and availability; our app strives to be strong in both.",
          url: "https://schemed.io",
          tech: "HTML, CSS, Javacscript, React.js",
        },
        {
          name: "Dad Joke Generator",
          shortname: "dad",
          crossPlatform: React.statics.medium.project,
          text: "As part of FreeCodeCamp's Front End Certification Program, I created a quote generator that displayed jokes from the front page of reddit's Dad Jokes community. Classes and other projects have definitely been more challenging and educational, but this is my pride and joy. Are your cringing yet? Hi, cringing!",
          tech: "HTML, CSS, Javascript, Bootstrap, reddit, Twitter",
          url: "https://mankaine.github.io/dad-joke-gen",
        },
      ],
      otherProjects: [
        {
          name: "Spot",
          shortname: "spot",
          crossPlatform: React.statics.medium.noScreenshot,
          text: "An iOS app currently in development. While I am responsible for the user interface, my roomate is building the data collection and analysis. When complete, it will allow users to track their financial obligations, and make requests or payments. Unlike other mobile payments systems, this application allows users to log payments that should be made or asked for before paying or requesting, so users can better meet their responsibilities.",
          tech: "Swift, XCode",
          url: "https://github.com/winstonlan/Spot"
        },
        {
          name: "Check Up",
          shortname: 'chup',
          crossPlatform: React.statics.medium.noScreenshot,
          text: "Geared towards the forgetful and elderly, Check Up is concerned about the health of users. Primary users are notified when to take their medicines, and if they failed to do so, the app would email those concerned. This app was made during HackUCI 2018, which was a way to work with great friends and learn more about version control, rapid iteration and development, targeting applications to users, and React Native.",
          tech: "HTML, CSS, Javascript, React Native",
          url: "https://github.com/mankaine/hackuci2018",
        },
        {
          name: "Kitchen Buddy",
          shortname: "kb",
          crossPlatform: React.statics.medium.noScreenshot,
          text: "Use this site to find recipes with given restrictions like time, diet, and available ingredients. Since this was a project from the HackUCI 2017 competition, I also learned how to effectively teach a friend Javascript while planning under a tight timeframe.",
          tech: "HTML, CSS, Javascript, JQuery",
          url: "https://mankaine.github.io/kitchenbuddy"
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
                if (e.crossPlatform === React.statics.medium.noScreenshot) {
                  return (<NoScreenshotProject name={e.name} url={e.url} text={e.text} shortname={e.shortname} key={i} styles={e.styles} tech={e.tech} />)
                } else if (e.crossPlatform == React.statics.medium.isCrossPlatform) {
                  return (<MultiPlatformProject name={e.name} shortname={e.shortname} url={e.url} text={e.text} key={i} styles={e.styles} tech={e.tech} />)
                } else {
                  return (<Project name={e.name} shortname={e.shortname} url={e.url} text={e.text} key={i} styles={e.styles} tech={e.tech} />)
                }
              }
            )
          }
        </div>
        <div className='secondary-projects-container'>
          {
            this.state.otherProjects.map(
              function (e, i) {
                return (<NoScreenshotProject name={e.name} url={e.url} text={e.text} shortname={e.shortname} key={i} styles={e.styles} tech={e.tech} />)
              }
            )
          }
        </div>
      </div>
    );
  }
}

export default ProjectContainer