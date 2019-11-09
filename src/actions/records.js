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

export const createRecord = ( recordData, history ) => {
  return dispatch => {
    // debugger
    const sendableRecordData = {
        workdate: recordData.workdate,
        totalHours: recordData.totalHours,
        groups: recordData.groups,
        payroll_id: recordData.id
    }
    console.log("sendableRecordData", sendableRecordData)
    return fetch(`http://localhost:3000/api/v1/records`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify(sendableRecordData)
    })
    .then(r => r.json())
    .then(resp => {
      // console.log("data", resp)
      if (resp.error) {
        alert(resp.error)
      }else{
      dispatch(addRecord(resp.data))
      dispatch(resetRecordForm())
      history.push(`records/${resp.data.id}`)
     }
    })
  }
}

export const updateRecord = ( recordData, history ) => {
  return dispatch => {
    console.log(recordData)
    const sendableRecordData = {
        id: recordData.id,
        workdate: recordData.workdate,
        totalHours: recordData.totalHours,
        groups: recordData.groups
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
