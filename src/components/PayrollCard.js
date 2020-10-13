import React from 'react'
import { Link } from 'react-router-dom'

const PayrollCard = ({payroll}) => {

  const myFunc = (total, num) => {
    return total + num;
  }

  const calculateTotalRecordHours =
  payroll ?
    payroll.attributes.records.map(
      record =>
      parseFloat(record.totalHours)).reduce(myFunc, 0)
      : null

  return (
    payroll ?
    <div>
      Pay Period:<h1>{payroll.attributes.payPeriod}</h1>
    Daily Totals: {payroll.attributes.records.map(record =>
        <li key={record.id}>{record.workdate} - {record.totalHours} hours</li>
        )}<br></br>
      Grand Totals:<h2>{calculateTotalRecordHours} hours</h2>
    <h1 className="doubleUnderline">$ {payroll.attributes.total}</h1>

  <Link to ={`/payrolls/${payroll.id}/edit`}
      key={payroll.attributes.id} ><button className="button button2">Add/Edit</button>
      </Link>
    </div>
     :
      null
  )
}



export default (PayrollCard);
