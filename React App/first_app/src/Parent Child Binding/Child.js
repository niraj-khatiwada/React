import React, { Component } from 'react'
import './Child.css'

class Child extends Component {
  constructor(props) {
    super(props)
    this.handlieRemove = this.handlieRemove.bind(this)
  }
  handlieRemove() {
    this.props.remove(this.props.item)
  }
  render() {
    return (
      <div className="Child">
        {this.props.num}
        <button onClick={this.handlieRemove}>x</button>
      </div>
    )
  }
}

export default Child
    