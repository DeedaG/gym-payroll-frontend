import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Payrolls = ({payrolls}) => {
// debugger
  const payrollCards =  payrolls.length > 0 ? payrolls.map(payroll =>

    	<li id="payrollList" key = {payroll.id}><><Link to ={`/payrolls/${payroll.id}`} key={payroll.attributes.id} style={{color: "black"}}>
          {payroll.attributes.payPeriod}
        </Link><br></br><br></br></></li>) : null

  return (
    <div className="PayrollList">{payrollCards}</div>
  )
}

  const mapStateToProps = state => {
// debugger
    return {
      payrolls: state.payrolls

    }
  }

export default connect(mapStateToProps)(Payrolls)
