import currentUser from './reducers/currentUser.js'
import loginForm from './reducers/loginForm.js'
import signupForm from './reducers/signupForm.js'
<<<<<<< HEAD
import newPayrollForm from './reducers/newPayrollForm.js'
=======
import payrollForm from './reducers/payrollForm.js'
>>>>>>> 171935c1e35a5ae988e64631118f4cb281562dd2
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
<<<<<<< HEAD
  newPayrollForm,
  groups,
  payrolls

=======
  payrollForm,
  groups,
  payrolls
>>>>>>> 171935c1e35a5ae988e64631118f4cb281562dd2
})

// const composeEnhancer = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
//
//  const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));
//
//  export default store
 const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

  export default store
