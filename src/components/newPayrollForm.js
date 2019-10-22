import React from 'react'
import { updateNewPayrollForm } from '../actions/payrollForm.js'
import { connect } from 'react-redux'
import Records from './Records.js'


const NewPayrollForm = ({ formData, updateNewPayrollForm, handleSubmit, userId, editMode }) => {
  const { payPeriod, records } = formData

  const handleChange = event => {
    const { name, value } = event.target
    updateNewPayrollForm(name,value)
  }


  return (
    <form onSubmit = {event => {
      event.preventDefault();
        handleSubmit(formData)
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
      </form>
  )};

const mapStateToProps = state => {
  // debugger
  const userId = state.currentUser ? state.currentUser.id : ""
    return {
      formData: state.payrollForm,
      userId,
      records: state.records
  }
}

export default connect(mapStateToProps, { updateNewPayrollForm })(NewPayrollForm);
