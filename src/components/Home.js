import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => (

  <div id="Home">
    <br></br>
    <br></br>
      <h1>Payroll Manager</h1>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
              rel="stylesheet"/>
            <span className="material-icons">
                star star star
              </span>
      <span>
        <h1><Link style={{color: "silver"}} to="/signup">Sign Up</Link> or <Link style={{color: "silver"}} to="/login">Log In</Link></h1>
      </span>
  </div>
)
export default (Home);
