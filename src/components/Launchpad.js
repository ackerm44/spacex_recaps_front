import React from 'react'
// import '../css/launchpads.css'

const Launchpad = props => (
  <div className="launchpadCard">
    <div className='launchpadInfo'>
      <h2>{props.launchpad.site_name_long}</h2>
      <p>{props.launchpad.location.name}, {props.launchpad.location.region}</p>
      <p>{props.launchpad.status}</p>
      <p>{props.launchpad.details}</p>
    </div>
    <div className="launchpadImage">
      <a href={props.launchpad.mage} target="_blank">
        <img src={props.launchpad.image} alt="launchpad" width="350"/>
      </a>
    </div>
  </div>
)


export default Launchpad
