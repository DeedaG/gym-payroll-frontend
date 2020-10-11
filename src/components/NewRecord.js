import React from 'react'
import { updateRecordForm } from '../actions/recordForm.js'
import { updatePayroll } from '../actions/payrolls.js'
import { createRecord } from '../actions/records.js'
import { connect } from 'react-redux'
import Calendar from 'react-calendar';
import GroupCheckBox from './GroupCheckBox.js'
import { withRouter } from 'react-router-dom';

class NewRecord extends React.Component {
  state = {
    workdate: new Date(),
    payrollData: {
      id: this.props.match.params.id,
      records: this.props.recordData,
      total: this.props.recordData.totalHours
    }
  }

  myFunction = () => {
    let popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

  handleClick = () => {
      this.props.createRecord({
        ...this.props.recordData,
        ...this.state.payrollData,
      }, this.props.history)
      this.props.updatePayroll(this.state.payrollData, this.props.history)
        }


   onChange = workdate => this.setState({ workdate },
     function () {
       this.props.updateRecordForm("workdate", this.state.workdate)
     })

  render() {
    // debugger
  return (
    <div>
      <div className="popup" >
        <button onClick={this.myFunction} className="popup button button4">Choose Day</button>
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
        <button className="button button2" onClick={this.handleClick}>Add Work to Time Card</button>
      </div>
    </div>


     )
    }
  }

  const mapStateToProps = state => {

    return {
      groups: state.groups,
      recordData: state.recordForm
    }
  }

  export default withRouter(connect(mapStateToProps,{updateRecordForm, updatePayroll, createRecord})(NewRecord))
