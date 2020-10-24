const initialState = {
    workdate: "",
    totalHours: "",
    groups: "",
    payroll_id: ""
}

export default (state=initialState, action) => {

  switch (action.type) {
    case 'UPDATE_RECORD_FORM':
      return {
        ...state,
        [action.formData.name]: action.formData.value }
    case 'RESET_RECORD_FORM':
      return initialState
    case "SET_FORM_DATA_FOR_EDIT":
        return action.payrollFormData

    default:
      return state
  }
}
