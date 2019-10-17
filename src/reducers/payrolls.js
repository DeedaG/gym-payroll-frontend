const initialState = []

export default (state = [], action) => {
  switch(action.type) {
    case "SET_MY_PAYROLLS":
      return action.payrolls
    case "ADD_PAYROLL":
      return state.concat(action.payroll)

    case "UPDATE_PAYROLL":
      return state.map(payroll => payroll.id === action.payroll.id ? action.payroll : payroll)
    case "DELETE_PAYROLL":
      return state.filter(payroll => payroll.id === action.payrollId ? false : true)
    case "CLEAR_MY_PAYROLLS":
      return initialState

    default:
        return state
    }
  }
