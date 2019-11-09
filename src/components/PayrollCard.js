import React from 'react'
import NewRecord from './NewRecord.js'
import { updateNewPayrollForm } from '../actions/payrollForm.js'
// import { connect } from 'react-redux'

const PayrollCard = ({payroll, formData, handleSubmit, userId}) => {
// debugger
  return (
    payroll ?
    <div>
      Pay Period:<h3>{payroll.attributes.payPeriod}</h3>
      Dates Included in Total: {payroll.attributes.records.map(record =>
        record.workdate
          )}
      <h2>Grand Total:{payroll.attributes.total}</h2>
      <NewRecord/>

    </div>
     :
      null
  )
}



export default (PayrollCard);
