import React, { Component } from 'react'

class Niraj extends Component {
  render() {
    return this.props.name === 'address' ? (
      <h1>Bharatpur</h1>
    ) : (
      <h1>404 not found</h1>
    )
  }
}

export default Niraj
