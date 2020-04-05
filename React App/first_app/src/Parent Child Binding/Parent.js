import React, { Component } from 'react'
import './Parent.css'

import Child from './Child'

class Parent extends Component {
  constructor(props) {
    super(props)
    this.state = { nums: [1, 2, 3, 4, 5, 6] }
    this.removeItem = this.removeItem.bind(this)
  }

  removeItem(item) {
    console.log('Removing', item)
    this.setState((preState) => {
      return {
        nums: preState.nums.filter((value) => {
          return value !== item
        }),
      }
    })
  }
  render() {
    const nums = this.state.nums.map((value) => {
      return (
        <li>
          <Child num={value} remove={this.removeItem} item={value} />
        </li>
      )
    })
    return <div className="Parent">{nums}</div>
  }
}

export default Parent
