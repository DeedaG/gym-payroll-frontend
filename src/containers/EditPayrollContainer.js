import React from 'react'
import { updatePayroll, deletePayroll } from '../actions/payrolls.js'
import { setFormDataForEdit, resetNewPayrollForm } from '../actions/payrollForm.js'
import { connect } from 'react-redux'
import NewPayrollForm from '../components/NewPayrollForm.js'


class EditPayrollContainer extends React.Component {

  componentDidMount() {
    this.props.payroll && this.props.setFormDataForEdit(this.props.payroll)
  }

  componentDidUpdate(prevProps) {
    this.props.payroll && !prevProps.payroll &&
    this.props.setFormDataForEdit(this.props.payroll)
  }

  componentWillUnmount() {
    this.props.resetNewPayrollForm()
  }

  handleSubmit = (formData) => {
    const { updatePayroll, payroll, history } = this.props
    updatePayroll({
      payrollId: payroll.id,
      ...formData
    }, history)
  }
  render() {
    const { history, payroll, deletePayroll } = this.props
    const payrollId = payroll ? payroll.id : null
    return <>
        <NewPayrollForm editMode handleSubmit={this.handleSubmit} />
        <br/>
        <button style={{color:"red"}} onClick={()=>deletePayroll(payrollId, history)}>Delete Payroll</button>
      </>

  }
};
export default connect(null, {updatePayroll, deletePayroll, setFormDataForEdit, resetNewPayrollForm })(EditPayrollContainer);
