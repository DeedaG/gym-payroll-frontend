import React from 'react'
import { updateNewPayrollForm } from '../actions/payrollForm.js'
import { setFormDataForEdit } from '../actions/payrollForm.js'
import NewRecord from './NewRecord.js'
import { connect } from 'react-redux'

const EditPayrollForm = ({ formData, setFormDataForEdit, updateNewPayrollForm, handleSubmit, userId }) => {
  const { payPeriod } = formData

  const handleChange = event => {
    const { name, value } = event.target
    updateNewPayrollForm(name,value)
  }

  return (
    <div>

      <label>Edit Pay Period: {payPeriod}</label>
      <form onSubmit = {event => {
        event.preventDefault();
          handleSubmit(formData)
        }}>
        <br></br>
        <input
          type="hidden"
          name="payPeriod"
          onChange={handleChange}
          value={payPeriod}
        />
      <NewRecord />
        <input
          type="submit"
          value="Enter"
        /><br/>
        </form>

      </div>
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

export default connect(mapStateToProps, {updateNewPayrollForm, setFormDataForEdit })(EditPayrollForm);
