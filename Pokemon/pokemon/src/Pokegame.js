import React, { Component } from 'react'
import './Pokegame.css'

import Pokecard from './Pokecard'

class Pokegame extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
      { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
      { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
      { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
      { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
      { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
      { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
      { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 },
    ],
  }

  render() {
    console.log(this.props)
    return this.props.pokemon.map((value, index) => {
      return (
        <div className="Pokegame">
          <div className="Pokegame-image">
            <img src="https://serebii.net/swordshield/pokemon/143.png"></img>
          </div>
          <div className="Pokegame-details">
            <h5 className="Pokegame-character">{value.name}</h5>
            <p className="Pokegame-type">{value.type}</p>
            <p className="Pokegame-experience">{value.base_experience}</p>
          </div>
        </div>
      )
    })
  }
}

export default Pokegame

//
