import React, { Component } from 'react';
import './App.css';
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Introduction from './components/introduction/Introduction'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Introduction />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App