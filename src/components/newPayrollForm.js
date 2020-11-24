import React from 'react'
import { updateNewPayrollForm } from '../actions/payrollForm.js'

import { connect } from 'react-redux'
import Records from './Records.js'

import Calendar from 'react-calendar';
import { getCurrentUser } from '../actions/currentUser.js'
import { connect } from 'react-redux'


class NewPayrollForm extends React.Component {
// const NewPayrollForm = ({ formData, updateNewPayrollForm, handleSubmit, userId}) => {
  // const { payPeriod } = formData
  state = {
    payPeriod: new Date()
  }


const NewPayrollForm = ({ formData, updateNewPayrollForm, handleSubmit, userId, editMode }) => {
  const { payPeriod, records } = formData

  const handleChange = event => {
    const { name, value } = event.target
    updateNewPayrollForm(name,value)
  }



  myFunction = (event) => {
    event.preventDefault();
    let popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

  onChange = payPeriod => this.setState({ payPeriod },
    function () {
      this.props.updateNewPayrollForm("payPeriod", this.state.payPeriod)
    },
  this.props.getCurrentUser())

render() {

  return (
    <form onSubmit = {event => {
      event.preventDefault();
        this.props.handleSubmit(this.props.formData)
      }}>
      <br></br>

      <input
        placeholder="payPeriod"
        name="payPeriod"
        onChange={handleChange}
        value={payPeriod}
      /><br/>
      <Records/>
      <br/>
          <input
            type="submit"
            value={editMode ? "Update Payroll" : "Create Payroll"}
          /><br/>

        <div className="popup" >
          <button onClick={this.myFunction} className="popup button button4">Select Pay Period</button>
          <span className="popuptext" id="myPopup">
            <Calendar
              placeholder="YYYY-MM-DD"
              name="payPeriod"
              onChange={this.onChange}
              value={this.state.payPeriod} />
          </span>
        </div>
        <br></br>
        <input
          style={{color: "green"}}
          type="submit"
          value="Create Payroll"
        /><br/>

      </form>
  )}
};

const mapStateToProps = state => {
  const userId = state.currentUser ? state.currentUser.id : ""
    return {
      formData: state.payrollForm,
      userId,

      records: state.records

      records: state.payrollForm.records

  }
}

export default connect(mapStateToProps, {getCurrentUser, updateNewPayrollForm })(NewPayrollForm);
