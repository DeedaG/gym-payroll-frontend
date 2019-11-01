import React from 'react';
import Calendar from 'react-calendar';

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
      </div>

    );
  }
}

export default ChooseDate;
