import React, { Component } from 'react'

class Niraj extends Component {
  componentDidMount() {
    console.log('Component did mount')
  }
  componentWillUnmount() {
    console.log('Unmount')
  }
  render() {
    console.log('Component did render')
    return <h1>{this.props.name}</h1>
  }
}

export default Niraj
 