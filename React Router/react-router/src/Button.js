import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'

class Button extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    {
      this.props.history.push('/')
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}

export default withRouter(Button)
