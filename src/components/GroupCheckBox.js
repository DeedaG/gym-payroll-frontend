import React from 'react'
import { updateRecordForm } from '../actions/recordForm.js'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';


class NewRecord extends React.Component {
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


  render() {
// debugger
  return (

    <div className="guide2">
      <label>Choose Classes</label>
      {this.props.groups.map((group, index) =>
     <li key = {group.id}>{group.attributes.name}
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
    return {
      groups: state.groups
    }
  }

  export default withRouter(connect(mapStateToProps,{updateRecordForm})(NewRecord))
