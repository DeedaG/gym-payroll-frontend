import React from 'react'
import { updateNewPayrollForm } from '../actions/payrollForm.js'
import { connect } from 'react-redux'
import Calendar from 'react-calendar';


class GroupCheckbox extends React.Component {
  state = {
    checkedGroups: [],
    workdate: new Date()
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
          this.props.updateNewPayrollForm("groups", this.state.checkedGroups)
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
       this.props.updateNewPayrollForm("workdate", this.state.workdate)
     })

  render() {
// debugger
  return (

    <div >
      <Calendar
        onChange={this.onChange}
        value={this.state.workdate}
      />
      {this.props.groups.map((group, index) =>
     <li key = {group.id}> {group.attributes.name}
     <><input
       name="groups"
       type="checkbox"
       onClick={(e)=>this.handleChangedGroups(e,group)}
    />{group.attributes.hours}<br></br></></li>)}
    </div>
     )
    }
  }

  const mapStateToProps = state => {
     // debugger
    return {
      groups: state.groups
    }
  }

  export default connect(mapStateToProps,{updateNewPayrollForm})(GroupCheckbox)
