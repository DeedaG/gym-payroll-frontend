import currentUser from './reducers/currentUser.js'
import loginForm from './reducers/loginForm.js'
import signupForm from './reducers/signupForm.js'
import payrollForm from './reducers/payrollForm.js'
import payrolls from './reducers/payrolls.js'
import recordForm from './reducers/recordForm.js'
import records from './reducers/records.js'
import groups from './reducers/groups.js'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
// import loginForm from './reducers/loginForm.js'


const reducer = combineReducers({
  // users: users,
  currentUser,
  loginForm,
  signupForm,
  payrolls,
  payrollForm,
  recordForm,
  records,
  groups
})

// const composeEnhancer = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
//
//  const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));
//
//  export default store
 const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

  export default store
