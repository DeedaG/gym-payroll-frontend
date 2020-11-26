import { resetRecordForm } from './recordForm.js'

export const setMyRecords = records => {
  return {
    type: "SET_MY_RECORDS",
    records
  }
}


export const clearMyRecords = () => {
  return {
    type: "CLEAR_MY_RECORDS"
  }
}

export const addRecord = record => {
  return {
    type: 'ADD_RECORD',
    record
  }
}


export const deleteRecordSuccess = recordId => {
  return {
    type: 'DELETE_RECORD',
    recordId
  }
}


export const updateRecordSuccess = record => {
  return {
    type: 'UPDATE_RECORD',
    record
  }
}

// async actions

export const getMyRecords = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/records",
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
          dispatch(setMyRecords(response.data))
        }
      })
      .catch(console.log)
  }
}

export const createRecord = ( recordData, history, payrollId, payroll ) => {

  function myPayrollAlert() {
    alert("Must Create Payroll!!")
  }

  return dispatch => {

    function myFunc(total, num) {
      return total + num;
    }
console.log("recordData", recordData)
    // const workedGroups = recordData != null ?
    //   recordData.groups ? recordData.groups : null
    //   : null
    // const workHours = workedGroups ? workedGroups.map(group =>
    //   parseFloat(group.attributes.hours)) : 0
    // const add = workHours ? workHours.reduce(myFunc, 0) : 0
    const month = recordData.workdate != null ? recordData.workdate.getUTCMonth() + 1 : ""
    const day = recordData.workdate != null ? recordData.workdate.getUTCDate() : ""
    const year = recordData.workdate != null ? recordData.workdate.getUTCFullYear() : ""
    const newdate = year + "/" + month + "/" + day

    const hoursArray = recordData.groups !== undefined && recordData.groups.length > 0 ?
      recordData.groups.map(group =>
      parseFloat(group.attributes.hours)) : 0

    const sendableRecordData = {
        workdate: newdate,
        groups: recordData.groups,
        totalHours: hoursArray.length > 0 ? hoursArray.reduce(myFunc, 0) : 0,
        payroll_id: recordData.payroll_id
      }

    return fetch('http://localhost:3000/api/v1/records', {

      credentials: 'include',
      method: 'POST',
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify(sendableRecordData)
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      }else{
        if(resp.payroll !== undefined && resp.payroll[0] === "must exist"){
          myPayrollAlert();
          history.push("/payrolls/new")
        }else{
      dispatch(addRecord(resp.data))
      dispatch(resetRecordForm())
      history.push({pathname: `/records/${resp.data.id}`,
      state: recordData})
      // history.push(`/records/${resp.data.id}`)
        }
      }
    })
  }
}

export const updateRecord = ( recordData, history ) => {
  return dispatch => {

    const sendableRecordData = {
        id: recordData.id,
        workdate: recordData.workdate,
        groups: recordData.groups,
        totalHours: recordData.totalHours,
        payroll_id: recordData.payroll_id
    }
    return fetch(`http://localhost:3000/api/v1/records/${recordData.recordId}`, {
      credentials: 'include',
      method: 'PATCH',
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify(sendableRecordData)
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      }else {
      dispatch(updateRecordSuccess(resp.data))
      history.push(`/records/${resp.data.id}`)
     }
    })
  }
}

export const deleteRecord = (recordId, history) => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/records/${recordId}`, {
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
          dispatch(deleteRecordSuccess(recordId))
          history.push(`/records`)
        }
      })
      .catch(console.log)
  }
}
