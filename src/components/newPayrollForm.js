import React from 'react'
import { updateNewPayrollForm } from '../actions/NewPayrollForm.js'
import { connect } from 'react-redux'
import GroupCheckbox from './GroupCheckbox.js'


const NewPayrollForm = ({ formData, updateNewPayrollForm, userId, handleSubmit, editMode }) => {
  const { payPeriod, total } = formData

  const handleChange = event => {
    const { name, value } = event.target
    updateNewPayrollForm(name,value)
  }

  return (

    <form onSubmit = {event => {
      event.preventDefault()
      handleSubmit(formData)}}>
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
            type="submit"
            value={editMode ? "Update Payroll" : "Create Payroll"}

          /><br/>
          <input
            placeholder="total"
            name="total"
            onChange={handleChange}
            value={total}
          />
      </form>

  )};

const mapStateToProps = state => {
  // debugger
  const userId = state.currentUser ? state.currentUser.id : ""
    return {
      formData: state.newPayrollForm,
      userId,
      groups: state.newPayrollForm.groups
  }
}

export default connect(mapStateToProps, { updateNewPayrollForm })(NewPayrollForm);
