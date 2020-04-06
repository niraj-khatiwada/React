import React, { Component } from 'react'
import './Child.css'

class Child extends Component {
  constructor(props) {
    super(props)
    this.handleRemove = this.handleRemove.bind(this)
  }
  handleRemove() {
    this.props.remove(this.props.item)
  }
  render() {
    return (
      <li>
        {this.props.num}
        <button onClick={this.handleRemove}>x</button>
      </li>
    )
  }
}

export default Child
