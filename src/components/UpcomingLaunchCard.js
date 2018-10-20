import React from 'react';
// import Moment from 'react-moment';
import DateFormat from './DateFormat'

const UpcomingLaunchCard = props => (
  <div>
    <h2>Flight Number: {props.launch.flight_number}</h2>
    <h3>Launch Date: <DateFormat date={props.launch.launch_date_utc} /></h3>
    <p>{props.launch.rocket.rocket_name}</p>
    <p>{props.launch.launch_site.site_name_long}</p>
  </div>
)


export default UpcomingLaunchCard
