import React from 'react'
import { updateRecordForm } from '../actions/recordForm.js'
import { updatePayroll } from '../actions/payrolls.js'
import { updatePayrollForm } from '../actions/payrollForm.js'
import { createRecord } from '../actions/records.js'
import { getCurrentUser } from '../actions/currentUser.js'
import { connect } from 'react-redux'
import Calendar from 'react-calendar';
import GroupCheckBox from './GroupCheckBox.js'
import { withRouter } from 'react-router-dom';

class NewRecord extends React.Component {
  myFunc = (total, num) => {
    return total + num;
  }

  records = this.props.payroll ? this.props.payroll.attributes.records : []
  hours = this.records !== 0 ?
    this.records.map(r => parseFloat(r.totalHours)) : 0
  totalHours = this.hours ?
    this.hours.reduce(this.myFunc, 0) : 0

  state = {
    workdate: new Date(),
    payroll_id: this.props.match.params.id,
    payrollData: {
      id: this.props.match.params.id,
      records: this.props.payroll ? this.props.payroll.attributes.records : [],
      total: this.totalHours * this.props.payRate
    }
  }

  myFunction = () => {
    let popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

  handleClick = () => {
      this.props.createRecord({
        ...this.props.recordData,
        ...this.state.payrollData
      }, this.props.history)
      this.props.updatePayroll(this.state.payrollData, this.props.history, this.props.payRate)
        window.location.assign(`/payrolls/${this.state.payrollData.id}`);
        }


   onChange = workdate => this.setState({ workdate },
     function () {
       this.props.updateRecordForm("workdate", this.state.workdate)
     },
   this.props.getCurrentUser())

  render() {
  return (
    <div >
      <div className="popup" >
        <button onClick={this.myFunction} className="popup button button4">Select Work Day</button>
        <span className="popuptext" id="myPopup">
          <Calendar
            name="workdate"
            onChange={this.onChange}
            value={this.state.workdate} />
        </span>
      </div>
      <div className="guide2">
        <br />
        <GroupCheckBox />
        <button className="button button2" onClick={this.handleClick}>Add Hours to Time Card</button>
      </div>
    </div>
     )
    }
  }

  const mapStateToProps = (state) => {
    return {
      groups: state.groups,
      recordData: state.recordForm,
      payRate: state.currentUser ? state.currentUser.attributes.payRate : 12
    }
  }

  export default withRouter(connect(mapStateToProps,{getCurrentUser, updateRecordForm, updatePayroll, updatePayrollForm, createRecord})(NewRecord))
