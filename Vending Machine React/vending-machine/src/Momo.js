import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Red from './Red'

class Momo extends Component {
  render() {
    return (
      <div className="Momo">
        <Red>
          <h1>Momo is love</h1>
          <Link to="/">Go Back</Link>
        </Red>
      </div>
    )
  }
}

export default Momo
