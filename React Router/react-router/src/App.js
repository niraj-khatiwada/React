import React, { Component } from 'react'
import './App.css'

import { Route, Switch, Redirect } from 'react-router-dom'

import DogList from './DogList'
import Dog from './Dog'
import Navbar from './Navbar'

import one from './Images/one.jpg'
import two from './Images/two.jpg'
import three from './Images/three.jpg'

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: 'Whiskey',
        age: 5,
        src: one,
        facts: [
          'Whiskey loves eating popcorn.',
          'Whiskey is a terrible guard dog.',
          'Whiskey wants to cuddle with you!',
        ],
      },
      {
        name: 'Hazel',
        age: 3,
        src: two,
        facts: [
          'Hazel has soooo much energy!',
          'Hazel is highly intelligent.',
          'Hazel loves people more than dogs.',
        ],
      },
      {
        name: 'Tubby',
        age: 4,
        src: three,
        facts: [
          'Tubby is not the brightest dog',
          'Tubby does not like walks or exercise.',
          'Tubby loves eating food.',
        ],
      },
      {
        name: 'Grumpy',
        age: 4,
        src: three,
        facts: [
          'Tubby is not the brightest dog',
          'Tubby does not like walks or exercise.',
          'Tubby loves eating food.',
        ],
      },
      {
        name: 'Tiger',
        age: 4,
        src: three,
        facts: [
          'Tubby is not the brightest dog',
          'Tubby does not like walks or exercise.',
          'Tubby loves eating food.',
        ],
      },
      {
        name: 'Puerto',
        age: 4,
        src: three,
        facts: [
          'Tubby is not the brightest dog',
          'Tubby does not like walks or exercise.',
          'Tubby loves eating food.',
        ],
      },
    ],
  }

  render() {
    return (
      <div className="App">
        <Navbar dogList={this.props.dogs} />
        <Switch>
          <Route
            exact
            path="/dogs"
            render={(routeProps) => (
              <DogList dogList={this.props.dogs} routeProps={routeProps} />
            )}
          />
          <Route
            exact
            path="/dogs/:name"
            render={(routeProps) => (
              <Dog dogList={this.props.dogs} routeProps={routeProps} />
            )}
          />
          <Redirect to="/dogs" />
        </Switch>
      </div>
    )
  }
}

export default App
