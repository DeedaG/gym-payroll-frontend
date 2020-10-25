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

  return (
    payroll ?
    <div className="row">
      <div className="moveLeft">
        Pay Period:<h1>{payroll.attributes.payPeriod}</h1>
        Grand Totals:<h2>{calcTotRecordHrs} hours</h2>
        <h1 className="doubleUnderline">$ {calcGrandT}</h1>
        <Link to ={`/payrolls/${payroll.id}/edit`}
          key={payroll.attributes.id} ><button className="button button2">Add/Edit</button>
        </Link>
      </div>
      <div className="moveRight">

        Daily Totals: {payroll.attributes.records.map(record =>
          <li key={record.id}>{record.workdate} {record.totalHours} hours</li>
          )
          .sort(function (a, b) {
                if (a.props.children[0] > b.props.children[0]) return 1;
                if (a.props.children[0] < b.props.children[0]) return -1;
                return 0;
              })
        }<br></br>
      </div>
    </div>
     :
      null
  )
}



export default (PayrollCard);
