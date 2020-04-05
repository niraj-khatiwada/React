import React, { Component } from 'react'
import './Lotto.css'

class Lotto extends Component {
  render() {
    return (
      <div className="Lotto">
        <div className="Lotto-item">
          <p>{this.props.num}</p>
        </div>
      </div>
    )
  }
}

export default Lotto
