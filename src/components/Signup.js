import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from "../actions/signupForm.js"
import { signup } from "../actions/currentUser.js"


const Signup = ({ signupFormData, updateSignupForm, signup, history }) => {

  const handleUser = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...signupFormData,
      [name]: value
    }
    updateSignupForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    signup(signupFormData, history)
  }

  const mystyle = {
        color: "black",
        backgroundColor: "silver",
        padding: "8px",
        fontFamily: "Arial"
      };
    // debugger

  return (
    <form onSubmit={handleSubmit}>
      <input style={mystyle} placeholder="username" value={signupFormData.username} name="username" type="text" onChange={handleUser} />
      <input style={mystyle} placeholder="password" value={signupFormData.password} name="password" type="text" onChange={handleUser} />
      <input style={mystyle} placeholder="payRate" value={signupFormData.payRate} name="payRate" type="text" onChange={handleUser} />

    <br/>
      <input style={mystyle} class="button button1" type="submit" value="Sign Up"/>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  }
}

export default connect(mapStateToProps, { updateSignupForm, signup } )(Signup)
