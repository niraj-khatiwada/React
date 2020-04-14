import React from 'react'
import logo from './logo.svg'
import './App.css'

import Niraj from './Niraj'

import { Route, Switch, Link } from 'react-router-dom'

const Roll = () => <h1>13</h1>

const Age = () => <h1>23</h1>

const Address = () => <h1>Bharatpur Chitwan</h1>

const HelloWorld = () => <h1>Hello World</h1>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <Link to="/name/address">Address</Link>
        <Switch>
          <Route exact path="/name" component={HelloWorld} />
          <Route
            exact
            path="/name/:name"
            render={(routeProps) => (
              <Niraj name={routeProps.match.params.name} />
            )}
          />
        </Switch>
      </header>
    </div>
  )
}

export default App
