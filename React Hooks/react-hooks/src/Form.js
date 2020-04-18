import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Form() {
  const [pokeName, setpokeName] = useState('')
  const [num, setNum] = useState(1)
  useEffect(() => {
    async function getPoke() {
      const res = await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${num}`)
        .then((r) => setpokeName(r.data.name))
    }
    getPoke()
  })
  return (
    <div>
      <h1>{pokeName}</h1>
      <select value={num} onChange={(evt) => setNum(evt.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </div>
  )
}
