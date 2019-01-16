import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>Will Khaine</h1>
                <ul className="menu">
                    <li>
                        <a href="#about">
                            <img src='./images/icons8-user-filled-100.png' alt='About'></img>
                            <span>About</span>
                        </a>
                    </li>
                    <li>
                        <a href="#work">
                            <img src='./images/icons8-cv-filled-100.png' alt='Work'></img>
                            <span>Work</span>
                        </a>
                    </li>
                    <li>
                        <a href="#projects">
                            <img src='./images/icons8-source-code-filled-48.png' alt='Projects'></img>
                            <span>Portfolio</span>
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            <img src='./images/icons8-communication-filled-100.png' alt='Connect'></img>
                            <span>Connect</span>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header