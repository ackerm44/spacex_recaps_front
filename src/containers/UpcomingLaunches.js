import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { upcomingLaunchesFetchData } from '../actions/upcomingLaunches'
import UpcomingLaunchCard from '../components/UpcomingLaunchCard'
// import '../css/launchIndex.css'


class UpcomingLaunches extends Component {
  constructor(props) {
    super(props);

    this.state = {
      upcomingLaunches: null
    };
  }

  componentDidMount() {
    fetch ('https://api.spacexdata.com/v3/launches/upcoming')
    .then((response) => {
      return response;
    })
    .then(response => response.json())
    .then(upcomingLaunches => this.setState({upcomingLaunches: upcomingLaunches}))
  }

  render() {
    if (this.state.upcomingLaunches === null) {
      return (
        <p>Loading</p>
      )
    } else {
      return (
        <div>
          <h1 className="title">Upcoming Launches</h1>
          <div className="launchesIndex">
            {this.state.upcomingLaunches.map(launch =>
              <UpcomingLaunchCard key={launch.flight_number.toString()} launch={launch} />
            )}
          </div>
        </div>
      )
    }


  }
}



// const mapStateToProps = state => {
//   return {
//     upcomingLaunches: state.upcomingLaunches,
//     hasErrored: state.upcomingLaunchesHasErrored,
//     isLoading: state.upcomingLaunchesIsLoading
//   }
// }
//
// const mapDispatchToProps = dispatch => {
//   return {
//     fetchData: (url) => dispatch(upcomingLaunchesFetchData(url))
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(UpcomingLaunches)
export default UpcomingLaunches
