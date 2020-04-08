import React, { Component } from 'react'
import './Lifecycles.css'

import axios from 'axios'

class Lifecycles extends Component {
  constructor(props) {
    super(props)
    console.log('Inside Contructor')
    this.state = {
      quote: '',
      isLoading: true,
    }
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then((res) => {
      setTimeout(() => {
        console.log(res.data.title)
        this.setState({ quote: res.data.title, isLoading: false })
      }, 3000)
    })
  }
  render() {
    return (
      <div className="Lifecycles">
        <h1>Stupid Quotes</h1>
        <div className={`loader-${this.state.isLoading}`}></div>
        <h1>{this.state.quote}</h1>
      </div>
    )
  }
}

export default Lifecycles
