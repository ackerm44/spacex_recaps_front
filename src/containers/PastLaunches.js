import React, { Component } from 'react'
// import { connect } from 'react-redux'
import Launch from '../components/Launch'
// import { pastLaunchesFetchData } from '../actions/pastLaunches'
// import '../css/launchIndex.css'


class PastLaunches extends Component {
  constructor(props){
    super(props);

    this.state = {
      pastLaunches: null
    };
  }

  componentDidMount() {
    fetch ('https://api.spacexdata.com/v3/launches/past?sort=flight_number&order=desc')
    .then((response) => {
      return response;
    })
    .then(response => response.json())
    .then(pastLaunches => this.setState({pastLaunches: pastLaunches}))
  }

  getLaunchParameter = (flightNumber) => {
    this.setState({launchShow: null})
  }

  render() {
    if (this.state.pastLaunches === null) {
      return (
        <p>Loading</p>
      )
    } else {
      return (
        <div>
          <h1 className="title">Past Launches</h1>
          <div className="launchesIndex">
            {this.state.pastLaunches.map(launch =>
              <Launch key={launch.flight_number.toString()} launch={launch} />
            )}
          </div>
        </div>
      )
    }
  }
}

export default PastLaunches
