import React, { Component } from 'react'
import './Complete.css'
import Forms from './Forms'
import ColorBox from './ColorBox'

class Complete extends Component {
  constructor(props) {
    super(props)
    this.state = {
      box: [],
    }
    this.createColorBox = this.createColorBox.bind(this)
    this.removeColorBox = this.removeColorBox.bind(this)
  }
  createColorBox(properties) {
    this.setState({ box: [...this.state.box, properties] })
    console.log(this.state.box)
  }

  removeColorBox(id) {
    this.setState({
      box: this.state.box.filter((value) => {
        return value.id !== id
      }),
    })
  }
  render() {
    const newColoBox = this.state.box.map((value) => {
      return (
        <ColorBox
          width={value.width}
          height={value.height}
          color={value.color}
          key={value.id}
          id={value.id}
          removeColorBox={this.removeColorBox}
        />
      )
    })
    return (
      <div className="Complete">
        <Forms handleInputs={this.createColorBox} key={this.state.id} />
        {newColoBox}
      </div>
    )
  }
}

export default Complete
