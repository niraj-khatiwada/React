import React, { Component } from 'react'
import './Parent.css'

import Child from './Child'

class Parent extends Component {
  constructor(props) {
    super(props)
    this.state = { nums: [1, 2, 2, 3, 4, 5, 6] }
    this.removeItem = this.removeItem.bind(this)
  }

  removeItem(item) {
    console.log('Removing', item)
    this.setState((preState) => {
      return {
        nums: preState.nums.filter((value, index) => {
          return index !== item
        }),
      }
    })
  }
  render() {
    const nums = this.state.nums.map((value, index) => {
      return (
        <Child num={value} remove={this.removeItem} item={index} key={index} />
      )
    })
    return (
      <div className="Parent">
        <ul>{nums}</ul>
      </div>
    )
  }
}

export default Parent
