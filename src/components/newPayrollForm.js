import React from 'react'
import { updateNewPayrollForm } from '../actions/payrollForm.js'
import { connect } from 'react-redux'


const NewPayrollForm = ({ formData, updateNewPayrollForm, handleSubmit, userId }) => {
  const { payPeriod } = formData

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
      <label>1. Enter Pay Period:</label>
      <input
        placeholder="YYYY-MM-DD"
        name="payPeriod"
        onChange={handleChange}
        value={payPeriod}
      />
        <input
          type="submit"
          value="Enter"
        /><br/>
      </form>
  )};

const mapStateToProps = state => {
  // debugger
  const userId = state.currentUser ? state.currentUser.id : ""
    return {
      formData: state.payrollForm,
      userId,
      records: state.payrollForm.records
  }
}

export default connect(mapStateToProps, { updateNewPayrollForm })(NewPayrollForm);
