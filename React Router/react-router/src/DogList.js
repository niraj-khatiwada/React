import React, { Component } from 'react'
import './DogList.css'
import { Link } from 'react-router-dom'

class DogList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const dogImages = this.props.dogList.map((dog) => (
      <div className="DogList-dog col-sm-3" key={dog.name}>
        <Link to={`dogs/${dog.name}`}>
          <img className="DogList-dog-img" src={dog.src} />
        </Link>
      </div>
    ))
    return (
      <div className="DogList">
        <div className="container">
          <div className="row">{dogImages}</div>
        </div>
      </div>
    )
  }
}

export default DogList
