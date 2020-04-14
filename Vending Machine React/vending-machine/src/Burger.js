import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Red from './Red'

class Burger extends Component {
  render() {
    return (
      <div className="Burger">
        <Red>
          <h1>Burger is okay</h1>
        </Red>
        <Link to="/">Go Back</Link>
      </div>
    )
  }
}

export default Burger
