import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>Will Khaine</h1>
                <ul className="menu">
                    <li><a style={{border: "0"}} href="#about">About</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        )
    }
}

export default Header