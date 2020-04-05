import React, { Component } from 'react'
import './Coin.css'

class Coin extends Component {
  render = () => {
    return (
      <div className="Coin">
        <img className="coinImage" src={`${this.props.imgSrc}`} alt="coin-img"></img>
      </div>
    )
  }
}

export default Coin
