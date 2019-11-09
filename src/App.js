import React from 'react';
import NavBar from './components/NavBar.js';
import { connect } from 'react-redux';
import { getCurrentUser} from './actions/currentUser.js';
import Signup from './components/Signup.js'
// import Logout from './components/Logout.js';
import Login from './components/Login.js';
import Home from './components/Home.js';
import './App.css';
import NewRecord from './components/NewRecord.js'
// import NewPayrollForm from './components/NewPayrollForm.js'
import EditPayrollContainer from './containers/EditPayrollContainer.js'
import NewPayrollContainer from './containers/NewPayrollContainer.js'
import RecordCard from './components/RecordCard.js'
import PayrollCard from './components/PayrollCard.js'
import Groups from './components/Groups.js'
import Payrolls from './components/Payrolls.js'

import { Route, Switch, withRouter } from 'react-router-dom';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
    }


  render() {
    const { loggedIn, payrolls, records } = this.props
  return (
    <div className="App">

       {loggedIn ? <NavBar/> : <Home/> }
      <Switch>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
        <Route exact path='/groups' component={Groups}/>
        <Route exact path='/payrolls' component={Payrolls}/>
        <Route exact path='/records/new' component={NewRecord}/>
        <Route exact path='/records/:id' render={props => {
          const record = records.find(record => record.id === props.match.params.id)
            return <RecordCard record={record} {...props}/>
          }}></Route>
        <Route exact path='/payrolls/new' component={NewPayrollContainer}/>
        <Route exact path='/payrolls/:id' render={props => {
          const payroll = payrolls.find(payroll => payroll.id === props.match.params.id)
            return <PayrollCard payroll={payroll} {...props}/>
            }
          }></Route>
        <Route exact path='/payrolls/:id/edit' render={props => {
        const payroll = payrolls.find(payroll => payroll.id ===
          props.match.params.id)
        return <EditPayrollContainer payroll={payroll} {...props}/>
        }}/>
      </Switch>
    </div>
  );
 }
}

const mapStateToProps = state => {
return ({
  loggedIn: !!state.currentUser,
    payrolls: state.payrolls,
    records: state.records,
    groups: state.groups
  })
}


export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
