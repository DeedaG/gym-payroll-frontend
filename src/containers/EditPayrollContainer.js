import React from 'react'
import { updatePayroll, deletePayroll } from '../actions/payrolls.js'
import { setFormDataForEdit, resetPayrollForm } from '../actions/payrollForm.js'
import { connect } from 'react-redux'
import EditPayrollForm from '../components/EditPayrollForm.js'

class EditPayrollContainer extends React.Component {

  componentDidMount() {
    this.props.payroll && this.props.setFormDataForEdit(this.props.payroll)
  }

  componentDidUpdate(prevProps) {
    this.props.payroll && !prevProps.payroll &&
    this.props.setFormDataForEdit(this.props.payroll)
  }

  componentWillUnmount() {
    this.props.resetPayrollForm()
  }

  handleSubmit = (formData) => {
    const { updatePayroll, history } = this.props
    updatePayroll({
      payrollId: this.props.match.params.id,
      ...formData
    }, history)
  }
  render() {
    const { history, payroll, deletePayroll } = this.props
    const payrollId = payroll ? payroll.id : null
    return <>
        <EditPayrollForm handleSubmit={this.handleSubmit}/>
        <br/>
        <button className="button button3" onClick={()=>deletePayroll(payrollId, history)}>Delete Payroll</button>
    </>

  }
};
export default connect(null, {updatePayroll, deletePayroll, setFormDataForEdit, resetPayrollForm })(EditPayrollContainer);
