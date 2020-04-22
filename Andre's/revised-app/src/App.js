import React, { Component } from 'react'
import './App.css'

import Food from './Food'

class App extends Component {
  state = {
    btn: false,
  }
  componentDidMount() {
    console.log('COmponent Did Mount')
  }
  componentDidUpdate(pp, ps) {
    console.log('Component Did update', pp, ps)
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState)
    return false
  }
  render() {
    return (
      <div className="App">
        <Food name="pizza" />
        <button onClick={() => this.setState({ btn: !this.state.btn })}>
          Click
        </button>
      </div>
    )
  }
}

export default App
