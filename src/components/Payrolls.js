import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const Payrolls = ({payrolls}) => {

  const payrollCards =  payrolls.length > 0 ? payrolls.map(payroll =>

    	<li key = {payroll.id}><><Link to ={`/payrolls`} key={payroll.attributes.id}>
          {payroll.attributes.payPeriod},
          {payroll.attributes.groups.map((group) => (
            <li key={group.id}>{group.attributes.name}, {group.attributes.hours}</li> ))}
        </Link><br></br><br></br></></li>) : null

  return (
    payrollCards
  )
}

  const mapStateToProps = state => {
// debugger
    return {
      payrolls: state.payrolls

    }
  }

export default connect(mapStateToProps)(Payrolls)
