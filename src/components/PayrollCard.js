import React from 'react'
import { Link } from 'react-router-dom'

const PayrollCard = ({payroll, payRate}) => {

  const myFunc = (total, num) => {
    return total + num;
  }

  const calcTotRecordHrs =
  payroll ?
    payroll.attributes.records.map(
      record =>
      parseFloat(record.totalHours)).reduce(myFunc, 0)
      : null

  const calcGrandT = calcTotRecordHrs * payRate

  const orderedRecs = payroll ?
    payroll.attributes.records.map(record =>
        record.workdate).sort(function (a, b) {
              if (a > b) return 1;
              if (a < b) return -1;
              return 0;
            }) : null

  return (
    payroll ?
    <div>
      Pay Period:<h1>{payroll.attributes.payPeriod}</h1>
    Daily Totals: {payroll.attributes.records.map(record =>
        <li key={record.workdate}>{record.workdate} {record.totalHours} hours</li>
        )
        .sort(function (a, b) {
              if (a.key > b.key) return 1;
              if (a.key < b.key) return -1;
debugger
              return 0;
            })
      }<br></br>
      Grand Totals:<h2>{calcTotRecordHrs} hours</h2>
    <h1 className="doubleUnderline">$ {calcGrandT}</h1>

  <Link to ={`/payrolls/${payroll.id}/edit`}
      key={payroll.attributes.id} ><button className="button button2">Add/Edit</button>
      </Link>
    </div>
     :
      null
  )
}



export default (PayrollCard);
