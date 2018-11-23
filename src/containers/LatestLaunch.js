import React, {Component} from 'react'
// import { connect } from 'react-redux';
import '../css/_theme.css'
import Moment from 'react-moment';
// import 'moment-timezone';
// import { latestLaunchFetchData } from '../actions/latestLaunch';
import Countdown from '../components/Countdown'
import DateFormat from '../components/DateFormat'


class LatestLaunch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nextLaunch: null
    };
  }

  componentDidMount() {
    fetch('https://api.spacexdata.com/v3/launches/next')
    .then((response) => {
      return response;
    })
    .then(response => response.json())
    .then(launch => this.setState({nextLaunch: launch}))
  }

  render() {
    if (this.state.nextLaunch === null) {
      return (
        <div>Loading</div>
      )
    } else {
      let nextLaunch = this.state.nextLaunch;
      // console.log(nextLaunch)
      const redditLink = ()=> {
        if (nextLaunch.links.reddit_campaign !== null) {
          return <a href={nextLaunch.links.reddit_campaign} target="_blank">More Information</a>
        }
      }
      console.log(nextLaunch);
      return (
        <div className="nextLaunch">
          <h1>NEXT LAUNCH</h1>
          <h1><DateFormat date={nextLaunch.launch_date_utc}/></h1>
          <h1><Moment format="hh:mm:ss a ( UTC  Z)" >{nextLaunch.launch_date_utc}</Moment></h1>
          <Countdown liftoff={nextLaunch.launch_date_utc} />
          <h2> Rocket: {nextLaunch.rocket.rocket_name}</h2>
          <h2> Launchpad: {nextLaunch.launch_site.site_name_long} </h2>
          {redditLink()}
        </div>
      )
    }
  }
}

export default LatestLaunch;
