const initialState = []

export default (state = [], action) => {
  switch(action.type) {
    case "SET_MY_RECORDS":
      return action.records
    case "ADD_RECORD":
      return state.concat(action.record)
    case "UPDATE_RECORD":
      return state.map(record => record.id === action.record.id ? action.record : record)
    case "DELETE_RECORD":
      return state.filter(record => record.id === action.recordId ? false : true)
    case "CLEAR_MY_RECORDS":
      return initialState

    default:
        return state
    }
  }
