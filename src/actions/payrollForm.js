export const  updateNewPayrollForm = (name, value) => {
  const formData = {name,value}

  return {
    type: "UPDATE_NEW_PAYROLL_FORM",
    formData
  }
}

export const  resetNewPayrollForm = () => {
  return {
    type: "RESET_NEW_PAYROLL_FORM"
  }
}

export const setFormDataForEdit = payroll => {

  const payrollFormData = {
    id: payroll.attributes.id,
    payPeriod: payroll.attributes.payPeriod,
    total: payroll.attributes.total,
    records: payroll.attributes.records
  }
  console.log("payrollFormData:", payrollFormData)
  return {
    type: "SET_FORM_DATA_FOR_EDIT",
    payrollFormData
  }
}
