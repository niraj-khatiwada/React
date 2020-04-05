import React, { Component } from 'react'
import './Lottery.css'

import Lotto from './Lotto'

class Lottery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numArray: this.generateArray(),
    }
  }

  static defaultProps = {
    title: 'Lottery',
    numBalls: 6,
    maxNum: 40,
  }
  generateArray = () => {
    const num = []
    for (let i = 1; i <= this.props.numBalls; i++) {
      num.push(i)
    }
    return num
  }

  generateRandomNum = () => {
    return this.setState({
      numArray: this.state.numArray.map((value) => {
        return Math.floor(Math.random() * this.props.maxNum)
      }),
    })
  }
  render = () => {
    const numArrayCopy = this.state.numArray.map((value) => {
      return <Lotto num={value} />
    })
    return (
      <div className="Lottery">
        <div className="Lottery-card">
          <h1>{this.props.title}</h1>
          <div className="Lottery-Flex">{numArrayCopy}</div>
          <button onClick={this.generateRandomNum}> Generate</button>
        </div>
      </div>
    )
  }
}

export default Lottery
