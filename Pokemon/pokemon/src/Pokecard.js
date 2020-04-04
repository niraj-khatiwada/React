import React, { Component } from 'react'
import './Pokecard.css'

import Pokegame from './Pokegame'

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'
class Pokecard extends Component {
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

  render() {
    //   console.log(this.props)
    return (
      <div className="Pokecard">
        <Pokegame />
      </div>
    )
  }
}

export default Pokecard
