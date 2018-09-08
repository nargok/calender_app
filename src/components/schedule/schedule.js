import React, { Component } from 'react'
import _ from 'lodash';

class Schedule extends Component {
  constructor() {
    super()
    const date = new Date()
    const defaultTime = date.getHours() + ":" + date.getMinutes()
    this.state = {
      inputText: "",
      inputTime: defaultTime,
      schedule: []
    }
  }

  handleInputText = (e) => {
    this.setState({ inputText: e.target.value });
  }

  handleInputTime = (e) => {
    this.setState({ inputTime: e.target.value });
  }

  handleRegisterButton = (date) => {
    const item = {
      date:date,
      time: this.state.inputTime,
      todo: this.state.inputText
    };
    const schedule = this.state.schedule;
    schedule.push(item);
    this.setState({ schedule: schedule });
  }

  render() {
    const date = this.props.selectedDate.formatDate();
    const schedules = this.state.schedule.filter((schedule) => schedule.date === date);
    const sortedSchedules = _.sortBy(schedules, ['time']);
    const items = sortedSchedules.map((schedule, index) => {
      return (
        <tr key={index}>
          <td>{schedule.time}</td>
          <td>{schedule.todo}</td>
        </tr>
      )
    })

    return (
      <React.Fragment>
        <h2>{date}の予定</h2>
        <div>
          <input type="text" value={this.state.inputText} onChange={this.handleInputText} />
          <input type="time" value={this.state.inputTime} onChange={this.handleInputTime} required/>
          <button onClick={() => this.handleRegisterButton(date)}>登録</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>時間</th><th>予定</th>
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}

export default Schedule;