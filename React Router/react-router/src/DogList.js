import React, { Component } from 'react'
import './DogList.css'
import Dog from './Dog'

class DogList extends Component {
  render() {
    const dogImages = this.props.dogList.map((dog) => (
      <div className="DogList-dog">
        <img className="DogList-dog-img" src={dog.src} />
      </div>
    ))
    return (
      <div className="DogList">
        <div className="DogList-dog-flex">{dogImages}</div>
      </div>
    )
  }
}

export default DogList
