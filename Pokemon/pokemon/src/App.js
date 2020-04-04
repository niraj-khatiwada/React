import React, { Component } from 'react'
import "./App.css"

import Pokecard from "./Pokecard"
// import Pokegame from "./Pokegame"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokecard />
      </div>
    )
  }
}

export default App