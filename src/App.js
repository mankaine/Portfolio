import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header'
import Introduction from './components/introduction/Introduction'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Introduction />
      </div>
    )
  }
}

export default App