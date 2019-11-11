import React from 'react';
// import Login from './Login.js'
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <br></br>
    <br></br>
      <h1>Payroll</h1>
      <span>
        <h1><Link to="/signup">Sign Up</Link> or <Link to="/login">Log In</Link></h1>
      </span>
  </div>
)
export default (Home);
