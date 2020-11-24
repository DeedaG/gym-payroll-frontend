import React from 'react'
import { updateRecordForm } from '../actions/recordForm.js'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';


class NewRecord extends React.Component {
  state = {
    checkedGroups: []
  }

  myFunction = () => {
    let popup = document.getElementById("myPopup2");
    popup.classList.toggle("show");
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

    <div className="popup">
      <button onClick={this.myFunction} className="popup button button4">Choose Classes</button>
      <span className="popuptext" id="myPopup2">
        {this.props.groups.map((group, index) =>
           <li key = {group.id}>{group.attributes.name}
             <><input
               name="groups"
               type="checkbox"
               onClick={(e)=>this.handleChangedGroups(e,group)}
             />{group.attributes.hours}<br></br></>
         </li>)}
      </span>
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
