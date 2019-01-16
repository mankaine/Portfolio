import React, { Component } from 'react'
import "./Contact.css"
import SectionTitle from '../common/SectionTitle';

class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <button className="anchor" name="contact"></button>
        <SectionTitle text='Connect' />
        <p>More coffee? Good. <a href='mailto:williamkhaine@gmail.com'>Let’s get to know each other</a>.</p>
        <hr />
      </div>
    )
  }
}

export default Contact