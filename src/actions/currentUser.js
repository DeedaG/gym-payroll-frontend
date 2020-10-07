import { resetLoginForm } from "./loginForm.js";
import { resetSignupForm } from "./signupForm.js"
import { getMyPayrolls } from "./payrolls.js"
import { getMyRecords } from "./records.js"
import { getMyGroups} from './groups.js'

export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
}


//asynchronous action creators
export const login = (info, history) => {
  return dispatch => {
    // console.log(info)
    return fetch("http://localhost:3000/api/v1/login",
    {
      credentials: "include",
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(info)
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setCurrentUser(response.data))
          dispatch(getMyPayrolls())
          dispatch(getMyRecords())
          dispatch(getMyGroups())
          dispatch(resetLoginForm())
          history.push('/')
        }
      })
      .catch(console.log)
    }
  }


  export const signup = (credentials, history) => {
  return dispatch => {
    const userInfo = {
      user: credentials
    }
    return fetch("http://localhost:3000/api/v1/signup", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setCurrentUser(response.data))
          dispatch(resetSignupForm())
          history.push('/')
        }
      })
      .catch(console.log)
  }
}


  export const logout = () => {
    return dispatch => {

      return fetch('http://localhost:3000/api/v1/logout',
      {
        credentials: "include",
        method: "DELETE"
      })
    }
  }



  export const getCurrentUser = () => {
    return dispatch => {
      return fetch('http://localhost:3000/api/v1/get_current_user',
      {
        credentials: "include",
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        },
      })
        .then(r => r.json())
        .then(response => {
          if (response.error) {
            alert(response.error)
          } else {
            dispatch(setCurrentUser(response.data))
            dispatch(getMyPayrolls())
            dispatch(getMyRecords())
            dispatch(getMyGroups())
          }
        })
        .catch(console.log)
      }
    }
