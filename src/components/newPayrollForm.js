import React from 'react'
import { updateNewPayrollForm } from '../actions/payrollForm.js'
// import { createPayroll } from '../actions/payrolls.js';
import { connect } from 'react-redux'
import Workday from './Workday.js'
import GroupCheckbox from './GroupCheckbox.js'


<<<<<<< HEAD

const NewPayrollForm = ({ formData, updateNewPayrollForm, userId, handleSubmit, editMode }) => {
=======
const NewPayrollForm = ({ formData, updateNewPayrollForm, handleSubmit, userId, editMode }) => {
>>>>>>> 171935c1e35a5ae988e64631118f4cb281562dd2
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
      <label>Pay Period:</label>
      <input
        placeholder="payPeriod"
        name="payPeriod"
        onChange={handleChange}
        value={payPeriod}
      /><br/>
<<<<<<< HEAD
        <Workday/>
        <GroupCheckbox/>
        <br/>
        <label>Total:</label>
=======
      <GroupCheckbox />
      <br/>
>>>>>>> 171935c1e35a5ae988e64631118f4cb281562dd2
        <input
          placeholder="total"
          name="total"
          onChange={handleChange}
          value={total}
        /><br/>
<<<<<<< HEAD
        <input
          type="submit"
          value={editMode ? "Update Payroll" : "Create Payroll"}

        /><br/>

=======
          <input
            type="submit"
            value={editMode ? "Update Payroll" : "Create Payroll"}
          /><br/>
>>>>>>> 171935c1e35a5ae988e64631118f4cb281562dd2
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
