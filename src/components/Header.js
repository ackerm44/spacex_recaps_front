import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = props => {
  return (
    <div>
      <div className="titlebar">
        <div className="site-title">
          <h1>SpaceXrecapS</h1>
        </div>
      </div>
      <div className="navlinks">
        <hr />
        <NavLink to="/" exact >Home</NavLink>
        <NavLink to="/upcoming" exact >Upcoming Launches</NavLink>
        <NavLink to="/past" exact >Past Launches</NavLink>
        <NavLink to="/rockets" exact >Rockets</NavLink>
        <NavLink to="/launchpads" exact >Launchpads</NavLink>
      </div>
    </div>
  )
}

export default Header
