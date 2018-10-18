import React, { Component } from 'react'

class SectionTitle extends Component {
  render() {
    const divStyles = this.props.styles || {
      marginTop: "-60px",
    }
    const h1Styles = {
      marginBottom: "0",
    }
    const markStyles = {
      background: "black",
      color: "white",
      padding: "0 5px",
      margin: '0 10%'
    }
    return (
      <div style={divStyles} >
        <h1 style={h1Styles}><mark style={markStyles}>{this.props.text}</mark></h1>
      </div>
    )
  }
}

export default SectionTitle