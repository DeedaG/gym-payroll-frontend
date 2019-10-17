import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Logout from './Logout.js'


  const NavBar = ( { currentUser, loggedIn }) => {
    return (
      <div className="NavBar">
        <NavLink exact activeClassName="active" to="/payrolls">My Payrolls   </NavLink>
        <NavLink exact activeClassName="active" to="/payrolls/new"><h2>Create Time Card</h2></NavLink>
        { loggedIn ? <Logout /> : null}
    </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(NavBar)
