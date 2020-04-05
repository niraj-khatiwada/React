import React, { Component } from 'react'
import './FlipACoin.css'

import Coin from './Coin'

class FlipACoin extends Component {
  constructor(props) {
    super(props)
    this.flipCoin = this.flipCoin.bind(this)
    this.state = {
      side: 'heads',
      totalFlips: 0,
      headsCount: 0,
      tailsCount: 0,
    }
  }
  static defaultProps = {
    heads: 'https://tinyurl.com/react-coin-heads-jpg',
    tails: 'https://tinyurl.com/react-coin-tails-jpg',
  }

  randomFlip = () => {
    const randNum = Math.floor(Math.random() * 1.9)
    if (randNum === 0) {
      return 'heads'
    } else {
      return 'tails'
    }
  }
  flipCoin() {
    const hORt = this.randomFlip()
    this.setState((preState) => {
      let newState = {
        ...preState,
        side: hORt,
        totalFlips: preState.totalFlips++,
      }
      if (hORt === 'heads') {
        newState.headsCount += 1
      } else {
        newState.tailsCount += 1
      }
      this.setState(newState)
    })
  }

  render = () => {
    return (
      <div className="FlipACoin">
        <Coin imgSrc={this.props[this.state.side]} />
        <button className="FlipACoin-btn" onClick={this.flipCoin}>
          Flip
        </button>
        <p>Total Flips= {this.state.totalFlips} </p>
        <p>Heads={this.state.headsCount}</p>
        <p>Tails= {this.state.tailsCount}</p>
      </div>
    )
  }
}

export default FlipACoin
