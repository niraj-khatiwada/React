import React, { Component } from 'react'

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      icon: ['angry'],
    }
  }
  static defaultProps = {
    icons: [
      'angry',
      'anchor',
      'archive',
      'at',
      'archway',
      'baby',
      'bell',
      'bolt',
      'bone',
      'car',
      'city',
      'cloud',
      'couch',
    ],
  }

  getRandomIcons = () => {
    const randIcon = this.props.icons[
      Math.floor(Math.random() * this.props.icons.length)
    ]

    return this.setState({ icon: [...this.state.icon, randIcon] })
  }
  resetState = () => {
    return this.setState({ icon: [] })
  }

  render = () => {
    const icons = this.state.icon.map((value) => {
      return <i className={`fas fa-${value}`}></i>
    })
    return (
      <div className="Game">
        Icons: {icons}
        <button onClick={this.getRandomIcons}>Click</button>
        <button onClick={this.resetState}>Reset</button>
      </div>
    )
  }
}

export default Game
