import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Logout from './Logout.js'


  const NavBar = ( { currentUser, loggedIn }) => {
    return (
      <div className="NavBar">
        <NavLink exact activeClassName="active" to="/payrolls/new"><h3>Create New Time Card</h3></NavLink>

        <NavLink exact activeClassName="active" to="/payrolls"><h4>My Payrolls</h4></NavLink>

        { loggedIn ? <Logout /> : null}
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
              rel="stylesheet"/>
            <span style={{ fontSize: 100 }} className="material-icons darkgray">
          star star star star star star star star star star star star
          </span>
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
