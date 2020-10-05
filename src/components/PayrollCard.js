import React from 'react'
import NewRecord from './NewRecord.js'
// import { connect } from 'react-redux'

const PayrollCard = ({payroll}) => {

  const myFunc = (total, num) => {
    return total + num;
  }

  const calculateTotalRecordHours =
  payroll ?
    payroll.attributes.records.map(
      record =>
      parseInt(record.totalHours)).reduce(myFunc, 0)
      : null

  return (
    payroll ?
    <div>
      Pay Period:<h1>{payroll.attributes.payPeriod}</h1>
    Daily Totals: {payroll.attributes.records.map(record =>
        <li key={record.id}>{record.workdate} - {record.totalHours} hours</li>
        )}<br></br>
    Grand Total:<h1>{calculateTotalRecordHours} hours</h1>
      <NewRecord/>
    </div>
     :
      null
  )
}



export default (PayrollCard);
