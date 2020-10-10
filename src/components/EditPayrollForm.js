import React from 'react'
import { updatePayrollForm } from '../actions/payrollForm.js'
import { setFormDataForEdit } from '../actions/payrollForm.js'
import NewRecord from './NewRecord.js'
import { connect } from 'react-redux'

const EditPayrollForm = ({ formData, setFormDataForEdit, updatePayrollForm, handleSubmit, userId }) => {
  const { payPeriod } = formData

  const handleChange = event => {
    const { name, value } = event.target
    updatePayrollForm(name,value)
  }

  return (
    <div>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"/>
          <span className="material-icons edit">
        edit
      </span>
      <h3 className="underline">...Editing Pay Period: {payPeriod}</h3>
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

export default connect(mapStateToProps, {updatePayrollForm, setFormDataForEdit })(EditPayrollForm);
