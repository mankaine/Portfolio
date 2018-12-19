import React, { Component } from 'react'
import './ProjectContainer.css'
import Project from './Project'
import MultiPlatformProject from './MultiPlatformProject'
import MobileProject from './MobileProject'
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
          name: 'Seal Spotter',
          shortname: 'seal',
          crossPlatform: React.statics.medium.isPhoneOnly,
          url: 'https://www.pacificmmc.org',
          text: 'The Pacific Marine Mammal Center (PMMC) asked a team of five to develop a mobile app to report resightings of seals and sea lions on the United States West Coast. I developed most features on the reporting phase of the app for both Android and iOS devices, and designed the user interface. Working with my teammates was a great way understand how to collaborate better, and effectivley elicit requirements from the PMMC.',
          tech: 'Javascript, React Native, Python',
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
          text: "The official website for UC Irvine’s on-campus entrepreneurial resource. I developed new features, like: a facelift the site to create a cleaner, more vibrant site; a blog to showcase ANTrepreneurs ('cause UC Irvine’s mascot is an anteater) and drive site traffic, and; a location feature to announce a new space available for student startups and create renting opportunities for the Center. My other capacities at ANTrepreneur included writing about startups, and working with volunteers and other interns to publish a monthly newsletter.",
          tech: "HTML, CSS, Bootstrap, Wordpress",
        },
        {
          name: "Schemed",
          shortname: "schemed",
          crossPlatform: React.statics.medium.isCrossPlatform,
          text: "Schemed is a passion project I'm building with some friends. Right now, I'm working on the front end, but when it is finished, Schemed will provide users a fully integrated way of coordinating meetings and hangouts. Most event planning applications based on availability struggle with aesthetics and availability; our app strives to be strong in both.",
          url: "https://schemed.io",
          tech: "HTML, CSS, Javacscript, React.js",
        },
        {
          name: "Dad Joke Generator",
          shortname: "dad",
          crossPlatform: React.statics.medium.isCrossPlatform,
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
          text: "An iOS app currently in development. While I am responsible for the user interface, my roommate collects and preserves transactions. When complete, the app will allow users to track their financial obligations, and make requests or payments. Unlike other mobile payments systems, but like a tree, this application allows users to log payments should be made or asked for before paying or requesting, so users can better meet their responsibilities.",
          tech: "Swift, Firebase",
          url: "https://github.com/winstonlan/Spot"
        },
        {
          name: "Check Up",
          shortname: 'chup',
          crossPlatform: React.statics.medium.noScreenshot,
          text: "Geared towards the forgetful and elderly, Check Up is a health and wellness that app that notifies users when to take their medicines, and alerts others when needed. This app was made during HackUCI 2018, which was a way to work with great friends and learn more about version control, rapid iteration and development, targeting applications to users, and React Native.",
          tech: "HTML, CSS, Javascript, React Native",
          url: "https://github.com/mankaine/hackuci2018",
        },
        {
          name: "Kitchen Buddy",
          shortname: "kb",
          crossPlatform: React.statics.medium.noScreenshot,
          text: 'Use this site to find recipes with given restrictions like time, diet, and available ingredients. Since this was a project from the HackUCI 2017 competition, I also learned how to effectively teach a friend Javascript while planning under a tight timeframe.',
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