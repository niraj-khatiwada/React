import React, { Component } from 'react'
import Momo from './Momo'
import Burger from './Burger'
import Beer from './Beer'

import './VendingMachine.css'

import { Route, Switch, NavLink } from 'react-router-dom'

class VendingMachine extends Component {
  render() {
    return (
      <div className="VendingMachine">
        <nav>
          <NavLink exact to="/momo" activeClassName="active-nav-link">
            Momo
          </NavLink>
          <NavLink exact to="/burger" activeClassName="active-nav-link">
            Burger
          </NavLink>
          <NavLink exact to="/beer" activeClassName="active-nav-link">
            Beer
          </NavLink>
        </nav>
        <div className="VendingMachine-items">
          <Switch>
            <Route exact path="/momo" component={Momo} />
            <Route exact path="/burger" component={Burger} />
            <Route exact path="/Beer" component={Beer} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default VendingMachine
