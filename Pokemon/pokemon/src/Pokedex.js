import React, { Component } from 'react'
import './Pokedex.css'

import Pokegame from './Pokegame'

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'
class Pokedex extends Component {
  //   posterID(id) {
  //     let pos = ['0', '0', '0']
  //     const newID = [...`${id}`]
  //     pos.splice(pos.length - newID.length)
  //     pos.push(...`${id}`)
  //     const actualID = parseInt(
  //       pos.reduce((a, b) => {
  //         return a + b
  //       })
  //     )
  //     return POKE_API + actualID
  //   }
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
    const array1 = []
    const array2 = [...this.props.pokemon]
    while (array1.length !== array2.length) {
      const randPoke = Math.floor(Math.random() * array2.length)
      array1.push(array2[randPoke])
      array2.splice(randPoke, 1)
    }
    const totaExperience1 = array1.reduce((preval, currval) => {
      return preval + currval.base_experience
    }, 0)
    const totaExperience2 = array2.reduce((preval, currval) => {
      return preval + currval.base_experience
    }, 0)
    let arrayOne
    let arrayTwo
    if (totaExperience1 > totaExperience2) {
      arrayOne = 'isWinner'
      arrayTwo = 'isLoser'
    } else {
      arrayOne = 'isLoser'
      arrayTwo = 'isWinner'
    }
    return (
      <div className="Pokedex">
        <Pokegame pokemon={array1} winner={arrayOne} />
        <Pokegame pokemon={array2} winner={arrayTwo} />
      </div>
    )
  }
}

export default Pokedex
