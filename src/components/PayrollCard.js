import React from 'react'
import NewRecord from './NewRecord.js'
import { updateNewPayrollForm } from '../actions/payrollForm.js'
import { connect } from 'react-redux'

const PayrollCard = ({payroll, editMode, formData, handleSubmit, userId}) => {

  return (
    payroll ?

    <form onSubmit = {event => {
      event.preventDefault();
      handleSubmit(formData)}}>

      Pay Date:<h3>{payroll.attributes.payPeriod}</h3>
      Dates Included in Total: {payroll.attributes.records.map(record =>
        record.attributes.workdate
          )}
      <h2>Grand Total:{payroll.attributes.total}</h2>

      <NewRecord/>
      <input
        type="submit"
        value={editMode ? "Update Total" : "Submit Total"}
      /><br/>
    </form>
     :
      null
  )
}

const mapStateToProps = state => {
  // debugger
  const userId = state.currentUser ? state.currentUser.id : ""
    return {
      formData: state.payrollForm,
      userId
  }
}

export default connect(mapStateToProps, { updateNewPayrollForm })(PayrollCard);
