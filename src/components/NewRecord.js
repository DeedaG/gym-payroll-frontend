import React from 'react'
import { updateRecordForm } from '../actions/recordForm.js'
import { updatePayroll } from '../actions/payrolls.js'
import { createRecord } from '../actions/records.js'
import { connect } from 'react-redux'
import Calendar from 'react-calendar';
import { withRouter } from 'react-router-dom';


class NewRecord extends React.Component {
  state = {
    checkedGroups: [],
    workdate: new Date(),
    payrollData: {
      id: this.props.match.params.id,
      records: this.props.recordData
    }
  }

  handleClick = () => {
      this.props.createRecord({
        ...this.props.recordData,
        ...this.state.payrollData,
      }, this.props.history)
      // debugger
      this.props.updatePayroll(this.state.payrollData, this.props.history)
        }

  handleChangedGroups(e, value){
    console.log("target =", e.target.checked)
    console.log("state is", this.state)
    if (e.target.checked){
      //append to array
      this.setState({
        checkedGroups: this.state.checkedGroups.concat([value])
        },
        function () {
          this.props.updateRecordForm("groups", this.state.checkedGroups)
        }
      )

    } else {
      this.setState({
        checkedGroups : []
      },
    )
   }

 }

   onChange = workdate => this.setState({ workdate },
     function () {
       this.props.updateRecordForm("workdate", this.state.workdate)
     })

  render() {
// debugger
  return (

    <div >
      <label>2. Choose Day</label>
      <Calendar
        name="workdate"
        onChange={this.onChange}
        value={this.state.workdate}
      />3. Choose Classes
      {this.props.groups.map((group, index) =>
     <li key = {group.id}>{group.attributes.name}
     <><input
       name="groups"
       type="checkbox"
       onClick={(e)=>this.handleChangedGroups(e,group)}
      />{group.attributes.hours}<br></br></></li>)}
      <label>4. Add Work Day to Time Card</label>
      <button onClick={this.handleClick}>Add</button>
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
