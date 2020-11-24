import React from 'react'
import { updatePayrollForm } from '../actions/payrollForm.js'
import NewRecord from './NewRecord.js'
import { connect } from 'react-redux'

const EditPayrollForm = ({ formData, updatePayrollForm, payroll, userId }) => {

  return (
    <>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"/>
          <span className="material-icons edit">
        edit
      </span>
      <h3 className="underline">...Editing Pay Period: {formData.payPeriod}</h3>
      <h3>current total : ${formData.total}</h3>
      <NewRecord payroll={payroll}/>
      </>
  )};

const mapStateToProps = state => {
  const userId = state.currentUser ? state.currentUser.id : ""
    return {
      formData: state.payrollForm,
      userId,
      records: state.payrollForm.records
  }
}

export default connect(mapStateToProps, {updatePayrollForm })(EditPayrollForm);
