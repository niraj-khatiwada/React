import React, { Component } from 'react'

export default class Food extends Component {
  componentWillUnmount(pp, ps) {
    console.log('Component will unmount')
  }
  render() {
    return (
      <div>
        <h1> I love {this.props.name}</h1>
      </div>
    )
  }
}
