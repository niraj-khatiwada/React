import React from 'react'
import useToggleState from './Custom Hooks/ToggleState'

function Hooks() {
  const [isHungry, setHungry] = useToggleState(true)
  const [mood, setMood] = useToggleState(true)
  return (
    <div>
      <h1>{isHungry ? 'Hungry' : 'Not so hungry'}</h1>
      <button onClick={() => setHungry()}>CLick</button>
      <h1>{mood ? 'Happy' : 'Sad'}</h1>
      <button onClick={() => setMood()}>CLick</button>
    </div>
  )
}

export default Hooks
