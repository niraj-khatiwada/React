import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Button from './Button'

class Niraj extends Component {
 
  render() {
    const age = this.props.pathParams.match.params.age
    return (
      <div>
       
        <button
          onClick={() => this.props.pathParams.history.push('/name/niraj')}
        >
          Submit
        </button>
      </div>
    )
  }
}

export default Niraj
