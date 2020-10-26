export const  updateNewPayrollForm = (name, value) => {
  const formData = {name,value}
  debugger
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

export const setFormDataForEdit = (payroll, payRate) => {
  function myFunc(total, num) {
    return total + num;
  }
  const payrollFormData = {
    // id: payroll.id,
    payPeriod: payroll.attributes.payPeriod,
    // total: payroll.attributes.total,
    total: payroll.attributes.records ?
    (payroll.attributes.records.map(r => parseFloat(r.totalHours)).reduce(myFunc, 0)) * payRate
    : 0,
    records: payroll.attributes.records
  }
  console.log("payrollFormData:", payrollFormData)
  console.log("payRate:", payRate)
  return {
    type: "SET_FORM_DATA_FOR_EDIT",
    payrollFormData
  }
}
