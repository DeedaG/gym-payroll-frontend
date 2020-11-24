import { resetNewPayrollForm } from './payrollForm.js'
import  {deleteRecord } from './records.js'

export const setMyPayrolls = payrolls => {
  return {
    type: "SET_MY_PAYROLLS",
    payrolls
  }
}


export const clearMyPayrolls = () => {
  return {
    type: "CLEAR_MY_PAYROLLS"
  }
}

export const addPayroll = payroll => {
  return {
    type: 'ADD_PAYROLL',
    payroll
  }
}


export const deletePayrollSuccess = payrollId => {
  return {
    type: 'DELETE_PAYROLL',
    payrollId
  }
}


export const updatePayrollSuccess = payroll => {
  return {
    type: 'UPDATE_PAYROLL',
    payroll
  }
}

// async actions

export const getMyPayrolls = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/payrolls",
    {
      credentials: "include",
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setMyPayrolls(response.data))
        }
      })
      .catch(console.log)
  }
}

export const createPayroll = ( payrollData, history ) => {
  return dispatch => {
    const sendablePayrollData = {
        id: payrollData.id,
        payPeriod: payrollData.payPeriod,
<<<<<<< HEAD
        total: payrollData.groups,
        records: payrollData.records
=======
        total: payrollData.total ? payrollData.total.toFixed(2) : 0.00,
        records: payrollData.records,
        user_id: payrollData.userId
>>>>>>> a252806b0ad52700013b2ac14120160e2d62bde9
    }
    console.log("sendablePayrollData", sendablePayrollData)
    return fetch('http://localhost:3000/api/v1/payrolls', {
      credentials: 'include',
      method: 'POST',
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify(sendablePayrollData)
    })
    .then(r => r.json())
    .then(resp => {
      console.log("payrollupdateresp", resp)
      if (resp.error) {
        alert(resp.error)
      }else{
      dispatch(addPayroll(resp.data))
      dispatch(resetNewPayrollForm())
      history.push(`/payrolls/${resp.data.id}`)
     }
    })
  }
}

export const updatePayroll = ( payrollData, history, payRate ) => {
  return dispatch => {

    const records = payrollData.records
    const payrollRecords = records !== null ?
      records.map(r => r.payroll_id = payrollData.id) : null

    const sendablePayrollData = {
        id: payrollData.id,
        payPeriod: payrollData.payPeriod,
<<<<<<< HEAD
        records: payrollData.records
=======
        total: payrollData.total.toFixed(2),
        records: payrollRecords
>>>>>>> a252806b0ad52700013b2ac14120160e2d62bde9
    }
    return fetch(`http://localhost:3000/api/v1/payrolls/${payrollData.id}`, {
      credentials: 'include',
      method: 'PATCH',
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify(sendablePayrollData)
    })
    .then(r => r.json())
    .then(resp => {
      console.log("resp", resp)
      if (resp.error) {
        alert(resp.error)
      }else
      {
      history.push(`/payrolls/${resp.id}/edit`)
      dispatch(updatePayrollSuccess(resp))
     }
    })
  }
}

export const deletePayroll = (payroll, payrollId, history) => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/payrolls/${payrollId}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(deletePayrollSuccess(payrollId))
          payroll.records.map(r => dispatch(deleteRecord(r.id, history)))
          history.push(`/payrolls`)
        }
      })
      .catch(console.log)
  }
}
