import React, { Component } from 'react'

class Game extends Component {
  state = {
    score: 0,
    isWinning: false,
  }

  changeScore = () => {
    this.setState({ score: 10 })
  }
  render() {
    return (
      <div>
        <h1>Your score is: {this.state.score}</h1>
        <h1>You are winning: {`${this.state.isWinning}`}</h1>
        <button onClick={this.changeScore}>Click</button>
      </div>
    )
  }
}

export default Game
