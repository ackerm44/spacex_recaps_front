import React from 'react';
import { Link } from 'react-router-dom'
// import Falcon_rocket_family from'../images/Falcon_rocket_family.svg.png'
import DateFormat from './DateFormat'

const Launch = props => {

  const patch_image_display = () => {
    if (props.launch.patch_image !== null) {
      return <img src={props.launch.links.mission_patch} alt={props.launch.mission_name} height="100" />
    }
  }

  return (
    <div>
      <h2><Link to={`/past/${props.launch.flight_number}`}>Flight Number: {props.launch.flight_number}</Link></h2>
      <p>{props.launch.mission_name}</p>
      <h3>Launch Date: <DateFormat date={props.launch.launch_date_utc} /></h3>
      {patch_image_display()}
      <p>{props.launch.rocket.rocket_name}</p>
      <p>{props.launch.launch_site.site_name_long}</p>

    </div>
  )
}


export default Launch
