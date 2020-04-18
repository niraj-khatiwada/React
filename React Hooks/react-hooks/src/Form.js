import React, { useState } from 'react'
import useFormHooks from './Custom Hooks/FormHooks'

export default function Form() {
  const [name, setName, resetNameInput] = useFormHooks()
  const [address, setAddress, resetAddressInput] = useFormHooks()
  const handleFormSubmit = (evt) => {
    evt.preventDefault()
    resetAddressInput()
    resetNameInput()
  }
  return (
    <div>
      <form onSubmit={handleFormSubmit} style={{ border: '3px solid red' }}>
        <h1>Name is {name}</h1>
        <input
          name="name"
          onChange={(evt) => {
            return setName(evt)
          }}
          value={name}
        />
        <button onClick={() => resetNameInput()}>Reset Name</button>
        <h1>Address is: {address}</h1>
        <input
          name="address"
          onChange={(evt) => setAddress(evt)}
          value={address}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
