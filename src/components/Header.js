import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = props => {
  return (
    <div className="header">
      <div className="titlebar">
        <div className="site-title">
          <a href="/"><h1>SpaceXrecapS</h1></a>
        </div>
      </div>
      <div className="navlinks">
        <hr />
        <NavLink to="/" exact >Countdown</NavLink>
        <NavLink to="/upcoming" exact >Upcoming Launches</NavLink>
        <NavLink to="/past" exact >Past Launches</NavLink>
        <NavLink to="/rockets" exact >Rockets</NavLink>
        <NavLink to="/launchpads" exact >Launchpads</NavLink>
      </div>
    </div>
  )
}

export default Header
