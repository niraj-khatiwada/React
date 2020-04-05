import React, { Component } from 'react'
import './Pokegame.css'

class Pokegame extends Component {
  render() {
    console.log(this.props.winner)
    const row = this.props.pokemon.map((value, index) => {
      return (
        <div className={`Pokegame ${this.props.winner}`}>
          <div className="Pokegame-image">
            <img src="https://serebii.net/swordshield/pokemon/143.png"></img>
          </div>
          <div className="Pokegame-details">
            <h5 className="Pokegame-character">{value.name}</h5>
            <p className="Pokegame-type">
              <strong>Type:</strong> {value.type}
            </p>
            <p className="Pokegame-experience">
              <strong>Experi:</strong> {value.base_experience}
            </p>
          </div>
        </div>
      )
    })
    return row
  }
}

export default Pokegame
