const initialState = {
    payPeriod: "",
    total: "",
    groups: ""
}

export default (state=initialState, action) => {

  switch (action.type) {
    case 'UPDATE_NEW_PAYROLL_FORM':
      return {
        ...state,
        [action.formData.name]: action.formData.value }
    case 'RESET_NEW_PAYROLL_FORM':
      return initialState
    case "SET_FORM_DATA_FOR_EDIT":
        return action.payrollFormData

    default:
      return state
  }
}
