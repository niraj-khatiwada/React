import React, { Component } from 'react'
import './Fruits.css'

import fruits from './food'
import { choice, remove } from './utils'

console.log(choice(fruits))

console.log(remove(fruits, '🍍'))
console.log(fruits)

class Fruits extends Component {
  render() {
    return (
      <div className="Fruits">
        <h1>Bark Bark</h1>
      </div>
    )
  }
}

export default Fruits
