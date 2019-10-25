import currentUser from './reducers/currentUser.js'
import loginForm from './reducers/loginForm.js'
import signupForm from './reducers/signupForm.js'
import newPayrollForm from './reducers/payrollForm.js'
import payrollForm from './reducers/payrollForm.js'
import payrolls from './reducers/payrolls.js'
import groups from './reducers/groups.js'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
// import loginForm from './reducers/loginForm.js'


const reducer = combineReducers({
  // users: users,
  currentUser,
  loginForm,
  signupForm,
  newPayrollForm,
  groups,
  payrolls,
  payrollForm,
  groups,
  payrolls

})

// const composeEnhancer = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
//
//  const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));
//
//  export default store
 const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

  export default store
