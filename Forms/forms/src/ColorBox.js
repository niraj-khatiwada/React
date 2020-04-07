import React, { Component } from 'react'
import './ColorBox.css'
import Forms from './Forms'

class ColorBox extends Component {
  constructor(props) {
    super(props)
    this.handleRemoveButton = this.handleRemoveButton.bind(this)
  }
  handleRemoveButton() {
    this.props.removeColorBox(this.props.id)
  }
  render() {
    return (
      <div
        className="ColorBox"
        style={{
          width: `${this.props.width}px`,
          height: `${this.props.height}px`,
          backgroundColor: `${this.props.color}`,
          margin: '1rem',
        }}
      >
        <button
          className="removeButton"
          style={{ textAlign: 'center', fontSize: '30px' }}
          onClick={this.handleRemoveButton}
        >
          X
        </button>
      </div>
    )
  }
}

export default ColorBox
