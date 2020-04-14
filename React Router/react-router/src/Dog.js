import React, { Component } from 'react'
import './Dog.css'

class Dog extends Component {
  render() {
    let dogName = this.props.routeProps.match.params.name
    const selectDog = this.props.dogList.filter((dog) => {
      if (dog.name.toLowerCase() === dogName.toLowerCase()) {
        return dog
      }
    })[0]
    console.log(selectDog)
    return (
      <div className="Dog row">
        <div className="col-md-2 Dog-card" style={{ padding: '0' }}>
          <img src={selectDog.src} className="card-img-top" alt="..." />
          <div className="card-body">
            <h3 className="card-title">{selectDog.name}</h3>
            <h5>{selectDog.age}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{selectDog.facts[0]}</li>
            <li className="list-group-item">{selectDog.facts[0]}</li>
            <li className="list-group-item">{selectDog.facts[0]}</li>
          </ul>
          <div className="card-body">
            <button
              className="btn btn-primary"
              onClick={() => this.props.routeProps.history.push('/dogs')}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Dog
