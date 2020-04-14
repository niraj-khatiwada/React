import React, { Component } from 'react'
import './Red.css'

class Red extends Component {
  render() {
    return <div className="Red">{this.props.children}</div>
  }
}

export default Red
