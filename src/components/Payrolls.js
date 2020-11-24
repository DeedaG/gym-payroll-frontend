import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Payrolls = ({payrolls}) => {
// debugger
  const payrollCards =  payrolls.length > 0 ? payrolls.map(payroll =>


    	<li key = {payroll.id}><><Link to ={`/payrolls`} key={payroll.attributes.id}>
          <h2>{payroll.attributes.payPeriod} - {payroll.attributes.total}</h2>
        </Link><br></br><br></br></></li>) : null

    	<ul id="payrollList" key = {payroll.id}>
        <span className="material-icons money">
      monetization_on
      </span><><Link to ={`/payrolls/${payroll.id}`}
        key={payroll.attributes.id} style={{color: "silver"}}>
          {payroll.attributes.payPeriod}
        </Link><br></br></></ul>) : null


  return (
    <div className="PayrollList">{payrollCards}</div>
  )
}

  const mapStateToProps = state => {
    return {
      payrolls: state.payrolls
    }
  }

export default connect(mapStateToProps)(Payrolls)
