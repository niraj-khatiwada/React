import React, { Component } from 'react'

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 0,
      isWinning: false,
    }
  }
  generateRandomNumber = () => {
    let randNum = Math.floor(Math.random() * 10)
    return this.setState({ num: randNum })
  }
  render = () => {
    return (
      <div className="Game">
        <h1>Number is: {this.state.num}</h1>
        {this.state.num !== 7 ? (
          <button onClick={this.generateRandomNumber}>
            Generate random Number{' '}
          </button>
        ) : (
          <h1>You won</h1>
        )}
      </div>
    )
  }
}

export default Game
