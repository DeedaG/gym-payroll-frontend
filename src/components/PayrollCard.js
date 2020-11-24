import React from 'react'
import { Link } from 'react-router-dom'

const PayrollCard = ({payroll, payRate, payrolls }) => {

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

  const currPayPd = payroll ?
      payroll.attributes.payPeriod
      : null

  const ttd = payrolls ? payrolls.filter(x => (x.attributes.payPeriod < currPayPd))
    .map(p => parseFloat(p.attributes.total)).reduce(myFunc, 0) + calcGrandT
    : null

  return (
    payroll ?
    <div className="row">
      <div className="moveLeft">
        Pay Period:<h1>{payroll.attributes.payPeriod}</h1>
        Payroll Totals:<h2>{calcTotRecordHrs} hours</h2>
        <h1 className="doubleUnderline">$ {calcGrandT}</h1>
        Cumulative Total: <h2 className="doubleUnderline">${ttd}</h2>
        <Link to ={`/payrolls/${payroll.id}/edit`}
          key={payroll.attributes.id} ><button className="button button2">Add/Edit/Delete</button>
        </Link>
      </div>
      <div className="moveRight">

        <h3>Daily Totals: <br></br>{payroll.attributes.records.map(record =>
          <ul key={record.id}>
            {console.log("payroll.attributes.records", payroll.attributes.records)}

            {record.workdate} {record.totalHours} hours</ul>
          )
          .sort(function (a, b) {
                if (a.props.children[0] > b.props.children[0]) return 1;
                if (a.props.children[0] < b.props.children[0]) return -1;
                return 0;
              })
        }</h3><br></br>
      </div>
    </div>
     :
      null
  )
}



export default (PayrollCard);
