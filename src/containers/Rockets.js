import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { rocketsFetchData } from '../actions/rockets';
import Rocket from '../components/Rocket'


class Rockets extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rockets: null
    }
  }
  componentDidMount() {
    fetch('https://api.spacexdata.com/v3/rockets')
    .then((response)=> {
      return response
    })
    .then(response => response.json())
    .then(rockets => this.setState({rockets: rockets}))
  }

  render() {
    if (this.state.rockets === null) {
      return (
        <p>Loading</p>
      )
    } else {
      return (
        <div>
          <h1 className="title">Rockets</h1>
          <div>
            {this.state.rockets.map(rocket => <Rocket key={rocket.id.toString()} rocket={rocket} />)}
          </div>
        </div>
      )
    }
  }
}

export default Rockets
