import React, { Component } from 'react'
import './Forms.css'
import { v4 as uuid } from 'uuid'

class Forms extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: '',
      height: '',
      color: '',
      id: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.handleInputs({ ...this.state, id: uuid() })
    this.setState({ width: '', height: '', color: '' })
  }
  render() {
    return (
      <div className="Forms">
        <form className="Form-Box" onSubmit={this.handleSubmit}>
          <label htmlFor="width">Width</label>
          <input
            type="number"
            name="width"
            placeholder="Enter width of box in px"
            onChange={this.handleChange}
            value={this.state.width}
          />
          <label htmlFor="height">Height</label>
          <input
            type="number"
            name="height"
            placeholder="Enter height of box on px"
            onChange={this.handleChange}
            value={this.state.height}
          />
          <label htmlFor="color">Background Color</label>
          <input
            name="color"
            placeholder="Enter the background color of box"
            onChange={this.handleChange}
            value={this.state.color}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Forms
