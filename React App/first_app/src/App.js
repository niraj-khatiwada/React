import React, { Component } from 'react'
import Fruits from './Fruits'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-heading">Hello world</h1>
         
        <Fruits />
      </div>
    )
  }
}

export default App
