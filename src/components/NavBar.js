import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Logout from './Logout.js'


  const NavBar = ( { currentUser, loggedIn }) => {
    return (
      <div className="NavBar">
        <NavLink exact activeClassName="active" to="/payrolls"><h3>My Payrolls</h3></NavLink>
        <NavLink exact activeClassName="active" to="/payrolls/new"><h3>Create NewTime Card</h3></NavLink>
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
