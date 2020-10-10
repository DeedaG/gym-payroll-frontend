export const  updateNewPayrollForm = (name, value) => {
  const formData = {name,value}

  return {
    type: "UPDATE_NEW_PAYROLL_FORM",
    formData
  }
}

export const  updatePayrollForm = (name, value) => {
  const formData = {name,value}

  return {
    type: "UPDATE_PAYROLL_FORM",
    formData
  }
}

export const  resetNewPayrollForm = () => {
  return {
    type: "RESET_NEW_PAYROLL_FORM"
  }
}

export const  resetPayrollForm = () => {
  return {
    type: "RESET_PAYROLL_FORM"
  }
}

export const setFormDataForEdit = (payroll) => {
  const myFunc = (total, num) => {
    return total + num;
  }

  const calcTotal =
  payroll.attributes.records.map(
    record =>
    parseInt(record.totalHours)).reduce(myFunc, 0)

  const payrollFormData = {
    id: payroll.id,
    payPeriod: payroll.attributes.payPeriod,
    total: calcTotal,
    records: payroll.attributes.records
  }
  console.log("payrollFormData:", payrollFormData)
  return {
    type: "SET_FORM_DATA_FOR_EDIT",
    payrollFormData
  }
}
