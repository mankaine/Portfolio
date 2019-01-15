import React, { Component } from 'react'
import "./Contact.css"
import SectionTitle from '../SectionTitle';

class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <a className="anchor" name="contact"></a>
        <SectionTitle text='Stay in Touch' />
        <p>More coffee? Good. <a href='mailto:williamkhaine@gmail.com'>Let’s get to know each other</a>.</p>
        <hr />
      </div>
    )
  }
}

export default Contact