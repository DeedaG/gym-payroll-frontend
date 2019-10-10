import React from 'react'
import { updateNewPayrollForm } from '../actions/NewPayrollForm.js'
import { connect } from 'react-redux'


class GroupCheckbox extends React.Component {
  state = {
    checkedGroups: []
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
        })

    } else {
      this.setState({
        checkedGroups : []
      })
   }

 }

  render() {
// debugger
  return (
    <div >
     {this.props.groups.map((group, index) =>
       <li key = {group.id}> {group.attributes.name}
       <><input
       name="groups"
       type="checkbox"
       onClick={(e)=>this.handleChangedGroups(e,group)}
      />{group.attributes.amount}<br></br></></li>)}
      </div>
     )
    }
  }

  const mapStateToProps = state => {
     // debugger
    return {
      groups: state.groups,
      payroll: state.newPayrollForm
    }
  }

  export default connect(mapStateToProps,{updateNewPayrollForm})(GroupCheckbox)
