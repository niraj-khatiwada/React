import React from 'react'
import logo from './logo.svg'
import './App.css'

import Niraj from './Niraj'

import { Route, Switch, NavLink } from 'react-router-dom'

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
        <nav>
          <a href="/">/</a>
          <a href="/name">Name</a>
          <a href="/name/roll">Roll</a>
          <a href="/name/age">Age</a>
          <a href="/address">Address</a>
        </nav>
        <nav>
          <NavLink exact to="/" activeClassName="active-link">
            /
          </NavLink>
          <NavLink exact to="/name/c" activeClassName="active-link">
            >NameC
          </NavLink>
          <NavLink exact to="/name/r" activeClassName="active-link">
            >NameR
          </NavLink>
          <NavLink exact to="/name/roll" activeClassName="active-link">
            >Roll
          </NavLink>
          <NavLink exact to="/name/age" activeClassName="active-link">
            >Age
          </NavLink>
          <NavLink exact to="/address" activeClassName="active-link">
            >Address
          </NavLink>
        </nav>
        <Switch>
          <Route exact path="/" component={HelloWorld} />
          <Route
            exact
            path="/name/c"
            component={() => <Niraj name="Niraj Khatiwada Component prop" />}
          />
          <Route
            exact
            path="/name/r"
            render={() => <Niraj name="Niraj Khatiwada Render prop" />}
          />
          <Route exact path="/name/roll" component={Roll} />
          <Route exact path="/name/age" component={Age} />
          <Route exact path="/address" component={Address} />
        </Switch>
      </header>
    </div>
  )
}

export default App
