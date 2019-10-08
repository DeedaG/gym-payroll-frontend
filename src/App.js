import React from 'react';
import NavBar from './components/NavBar.js';
import { connect } from 'react-redux';
import { getCurrentUser} from './actions/currentUser.js';
import Login from './components/Login.js';
import Home from './components/Home.js';
import './App.css';
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
