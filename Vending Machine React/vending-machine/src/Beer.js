import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Red from './Red'

class Beer extends Component {
  render() {
    return (
      <div className="Beer">
        <Red>
          <h1>Beer is awesome with Momo</h1>
          <Link to="/"> Go Back</Link>
        </Red>
      </div>
    )
  }
}

export default Beer
