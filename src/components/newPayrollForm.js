import React from 'react'
import { updateNewPayrollForm } from '../actions/payrollForm.js'
// import { createPayroll } from '../actions/payrolls.js';
import { connect } from 'react-redux'
import GroupCheckbox from './GroupCheckbox.js'


const NewPayrollForm = ({ formData, updateNewPayrollForm, handleSubmit, userId, editMode }) => {
  const { payPeriod, total } = formData

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
      <GroupCheckbox />
      <br/>
        <input
          placeholder="total"
          name="total"
          onChange={handleChange}
          value={total}
        /><br/>
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
      groups: state.payrollForm.groups
  }
}

export default connect(mapStateToProps, { updateNewPayrollForm })(NewPayrollForm);
