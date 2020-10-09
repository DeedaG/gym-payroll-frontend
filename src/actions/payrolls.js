import { resetNewPayrollForm } from './payrollForm.js'


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
        payPeriod: payrollData.payPeriod,
        total: payrollData.total,
        records: payrollData.records,
        user_id: payrollData.userId
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
      if (resp.error) {
        alert(resp.error)
      }else {
      dispatch(addPayroll(resp.data))
      dispatch(resetNewPayrollForm())
      history.push(`/payrolls/${resp.data.id}`)
     }
    })
  }
}

export const updatePayroll = ( payrollData, history ) => {
  return dispatch => {
    const sendablePayrollData = {
        id: payrollData.id,
        total: payrollData.total,
        records: payrollData.records
    }
    return fetch(`http://localhost:3000/api/v1/payrolls/${payrollData.id}`, {
      credentials: 'include',
      method: 'PATCH',
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify(sendablePayrollData)
    })
    // console.log("sendablePayrollData", sendablePayrollData)
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      }else
      {
      dispatch(updatePayrollSuccess(resp.data))
      history.push(`/payrolls/${resp.data.id}`)
     }
    })
  }
}

export const deletePayroll = (payrollId, history) => {
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
          history.push(`/payrolls`)
        }
      })
      .catch(console.log)
  }
}
