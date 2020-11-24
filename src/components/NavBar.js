import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Logout from './Logout.js'


  const NavBar = ( { currentUser, loggedIn }) => {
    return (
      <div className="NavBar">
<<<<<<< HEAD
        <NavLink exact activeClassName="active" to="/payrolls"><h4>Browse My Payrolls</h4></NavLink>
        <NavLink exact activeClassName="active" to="/records/new"><h3>Create New Time Card</h3></NavLink>

      { loggedIn ? <Logout /> : null}
=======
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
              rel="stylesheet"/>
            <NavLink style={{color: "navy"}} exact activeClassName="active" to="/payrolls/new"><h3>Create New Time Card</h3></NavLink>
            <NavLink style={{color: "navy"}} exact activeClassName="active" to="/payrolls"><h4>My Time Cards</h4></NavLink>
        { loggedIn ? <Logout /> : null}
            <span style={{ fontSize: 80, float: "right" }} className="material-icons darkgray">
           star star star star star star star
          </span>
>>>>>>> a252806b0ad52700013b2ac14120160e2d62bde9
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
