import React, { Component } from 'react'

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 0,
      isWinning: false,
    }
  }

  increaseStateBy5 = (st) => {
    return { num: st.num + 5 }
  }
  generateRandomNumber = () => {
    return this.setState(this.increaseStateBy5)
  }
  render = () => {
    return (
      <div className="Game">
        <h1>Number is: {this.state.num}</h1>
        <button onClick={this.generateRandomNumber}>Click</button>
      </div>
    )
  }
}

export default Game
