import React from 'react';
import NavBar from './components/NavBar.js';
import { connect } from 'react-redux';
import { getCurrentUser} from './actions/currentUser.js';
import Signup from './components/Signup.js'
import Logout from './components/Logout.js';
import Login from './components/Login.js';
import Home from './components/Home.js';
import './App.css';
<<<<<<< HEAD
import NewPayrollForm from './components/NewPayrollForm.js'
import groups from './components/groups.js'
=======
import NewPayrollContainer from './containers/NewPayrollContainer.js'
import Groups from './components/Groups.js'
import Payrolls from './components/Payrolls.js'
>>>>>>> 171935c1e35a5ae988e64631118f4cb281562dd2
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
<<<<<<< HEAD
        <Route exact path='/payrolls/new' component={NewPayrollForm}/>
        <Route exact path='/groups' component={groups}/>
=======
        <Route exact path='/payrolls/new' component={NewPayrollContainer}/>
        <Route exact path='/payrolls' component={Payrolls}/>
        <Route exact path='/groups' component={Groups}/>
>>>>>>> 171935c1e35a5ae988e64631118f4cb281562dd2
      </Switch>
    </div>
  );
 }
}

const mapStateToProps = state => {
return ({
  loggedIn: !!state.currentUser,
    payrolls: state.payrolls,
    groups: state.groups
  })
}


export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
