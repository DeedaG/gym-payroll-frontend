import React from 'react'
import { updateNewPayrollForm } from '../actions/newPayrollForm.js'
import { connect } from 'react-redux'


class GroupCheckbox extends React.Component {
  state = {
    // loan: "",
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
          // console.log(this.state.checkedLoans);
          this.props.updateNewPayrollForm("groups", this.state.checkedGroups)
        })

    } else {
      this.setState({
        checkedGroups : []
      })
   }

 }

  render() {

  return (
    <div >
     {this.props.groups.map((group, index) =>
       <li key = {group.id}>
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
