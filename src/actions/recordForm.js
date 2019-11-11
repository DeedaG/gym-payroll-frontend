export const  updateRecordForm = (name, value) => {
  const formData = {name,value}

  return {
    type: "UPDATE_RECORD_FORM",
    formData
  }
}

export const  resetRecordForm = () => {
  return {
    type: "RESET_RECORD_FORM"
  }
}

export const setFormDataForEdit = record => {
  const recordFormData = {
    id: record.attributes.id,
    workdate: record.attributes.workdate,
    totalHours: record.attributes.totalHours,
    groups: record.attributes.groups
  }
  console.log("recordFormData:", recordFormData)
  return {
    type: "SET_FORM_DATA_FOR_EDIT",
    recordFormData
  }
}
