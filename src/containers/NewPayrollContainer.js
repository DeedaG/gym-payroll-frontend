import React from 'react'
import { createPayroll } from '../actions/payrolls.js'
import { connect } from 'react-redux'
import NewPayrollForm from '../components/newPayrollForm.js'


const NewPayrollContainer = ({ history, createPayroll }) => {

  const handleSubmit = (formData, userId) => {
    createPayroll({
      ...formData,
        userId
        }, history)
      }

  return (

    <NewPayrollForm history={history} handleSubmit={handleSubmit} />
  )
};

export default connect(null, { createPayroll })(NewPayrollContainer);
