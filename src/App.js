import React from 'react';
import NavBar from './components/NavBar.js';
import { connect } from 'react-redux';
import { getCurrentUser} from './actions/currentUser.js';
import Signup from './components/Signup.js'
import Logout from './components/Logout.js';
import Login from './components/Login.js';
import Home from './components/Home.js';
import './App.css';
import NewPayrollForm from './components/NewPayrollForm.js'
import groups from './components/groups.js'
import { Route, Switch, withRouter } from 'react-router-dom';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
    }


  render() {
    const { loggedIn } = this.props
  return (
    <div className="App">

       {loggedIn ? <NavBar/> : <Home/> }
      <Switch>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
        <Route exact path='/payrolls/new' component={NewPayrollForm}/>
        <Route exact path='/groups' component={groups}/>
      </Switch>
    </div>
  );
 }
}

const mapStateToProps = state => {
return ({
  loggedIn: !!state.currentUser
  })
}


export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
