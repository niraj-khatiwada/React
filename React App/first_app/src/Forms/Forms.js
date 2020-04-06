import React, { Component } from 'react'

class Forms extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(evt) {
    evt.preventDefault()
    alert('Form is submitted')
    this.setState({ name: '', email: '' })
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label htmlFor="email">Username:</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <button type="submit">Save</button>
        </form>
      </div>
    )
  }
}

export default Forms
