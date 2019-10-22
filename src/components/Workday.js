import React, { Component } from 'react';
import Calendar from 'react-calendar';
// import { connect } from 'react-redux'
// import GroupCheckbox from './GroupCheckbox.js'

class WorkDay extends Component {
  state = {
    workdate: new Date(),
  }

  onChange = workdate => this.setState({ workdate })

  render() {
    // debugger
    return (
      <div>
        <Calendar
          name="workDay"
          onChange={this.onChange}
          value={this.state.workdate}
        />
      </div>
    );
  }
}

export default WorkDay;
