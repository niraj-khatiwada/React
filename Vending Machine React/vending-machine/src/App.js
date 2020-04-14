import React from 'react'
import './App.css'
import { Route, NavLink } from 'react-router-dom'

import VendingMachine from './VendingMachine'
function App() {
  return (
    <div className="App">
      <Route
        exact
        path="/"
        render={() => <h1>Welome! What can I get you?</h1>}
      />
      <VendingMachine />
    </div>
  )
}

export default App
