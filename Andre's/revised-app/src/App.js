import React, { Component } from 'react'
import './App.css'

import Food from './Food'

class App extends Component {
  state = {
    btn: true,
  }
  componentDidMount() {
    console.log('COmponent Did Mount')
  }
  componentDidUpdate(pp, ps) {
    console.log('Component Did update', pp, ps)
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextProps, nextState)
  //   return false
  // }
  componentWillUnmount(pp, ps) {
    console.log('Food is unmounted', pp, ps)
  }
  render() {
    return (
      <div className="App">
        {this.state.btn ? <Food name="pizza" /> : null}
        <button onClick={() => this.setState({ btn: !this.state.btn })}>
          Click
        </button>
      </div>
    )
  }
}

export default App
