import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Logout from './Logout.js'


  const NavBar = ( { currentUser, loggedIn }) => {
    return (
      <div className="NavBar">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
              rel="stylesheet"/>

            <div className="underline">
              <NavLink style={{color: "navy"}} exact activeClassName="active" to="/payrolls/new"><h3>Create New Time Card</h3></NavLink>
              <NavLink style={{color: "navy"}} exact activeClassName="active" to="/payrolls"><h4>My Time Cards</h4></NavLink>
              { loggedIn ? <Logout /> : null}
              <span style={{ fontSize: 80 }} className="material-icons darkgray">
             star star star star star star star star star star star star star
            </span>
            </div>
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
