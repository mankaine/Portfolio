import React, { Component } from 'react'
import "./Contact.css"
import SectionTitle from '../SectionTitle';

class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <a className="anchor" name="contact"></a>
        <SectionTitle text="Contact" />
        <p><a href='mailto:williamkhaine@gmail.com'>Let’s get to know each other</a> over some coffee. Or a burger. Anything, really, as long as it includes food.</p>
        <hr />
      </div>
    )
  }
}

export default Contact