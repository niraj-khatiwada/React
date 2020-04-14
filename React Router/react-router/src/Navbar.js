import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

class Navbar extends Component {
  render() {
    const navBarItem = this.props.dogList.map((item) => (
      <li className="nav-item" key={item.name}>
        <NavLink exact to={`/dogs/${item.name}`} className="nav-link">
          {item.name}
        </NavLink>
      </li>
    ))
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink exact to="/dogs" className="nav-link">
                Home
              </NavLink>
            </li>
            {navBarItem}
          </ul>
        </div>
      </nav>
    )
  }
}   

export default Navbar
