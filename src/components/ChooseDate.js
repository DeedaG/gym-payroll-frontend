import React, { Component } from 'react';
import Calendar from 'react-calendar';
import GroupCheckbox from './GroupCheckbox.js'

class ChooseDate extends Component {
  state = {
    workdate: new Date()
  }

  onChange = workdate => this.setState({ workdate })


  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.workdate}
        />
      <GroupCheckbox workday={this.state.workdate} />
      </div>

    );
  }
}

export default ChooseDate;
