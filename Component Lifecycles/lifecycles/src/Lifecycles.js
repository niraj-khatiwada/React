import React, { Component } from 'react'
import './Lifecycles.css'

import axios from 'axios'

class Lifecycles extends Component {
  constructor(props) {
    super(props)
    console.log('Inside Contructor')
    this.state = {
      username: '',
      profileImage: '',
    }
  }
  async componentDidMount() {
    console.log('Inside ComponentDidMount')
    const url = `https://api.github.com/users/${this.props.username}`
    await axios.get(url).then((res) => {
      console.log(res.data)
      this.setState({
        username: res.data.name,
        profileImage: res.data.avatar_url,
      })
    })
  }
  componentDidUpdate() {
    console.log('Component did update')
  }
  render() {
    console.log('Inside Render')
    return (
      <div className="Lifecycles">
        <h1>{this.state.username}</h1>
        <img src={this.state.profileImage} />
      </div>
    )
  }
}

export default Lifecycles
