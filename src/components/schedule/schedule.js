import React, { Component } from 'react'
import _ from 'lodash';

import '../../index.css';
import './schedule.css';

class Schedule extends Component {
  constructor() {
    super()
    const date = new Date()
    const defaultTime = this.getDoubleDigestNumer(date.getHours())
                      + ":"
                      + this.getDoubleDigestNumer(date.getMinutes())
    this.state = {
      inputText: "",
      inputTime: defaultTime,
      schedule: [],
      id: 0
    }
  }

  getDoubleDigestNumer = (number) => {
    return ("0" + number).slice(-2)
  }

  handleInputText = (e) => {
    this.setState({ inputText: e.target.value });
  }

  handleInputTime = (e) => {
    this.setState({ inputTime: e.target.value });
  }

  handleRegisterButton = (date) => {
    const item = {
      id: this.state.id,
      date:date,
      time: this.state.inputTime,
      todo: this.state.inputText
    };
    const schedule = this.state.schedule;
    schedule.push(item);
    this.setState({
      schedule: schedule,
      id: this.state.id + 1
    });
  }

  handleDeleteButton = (id) => {
    const newSchedule = this.state.schedule.filter((item) => item.id !== id);
    this.setState({ schedule: newSchedule });
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
          <td><button onClick={() => this.handleDeleteButton(schedule.id)}>削除</button></td>
        </tr>
      )
    })

    return (
      <React.Fragment>
        <h2>{date}の予定</h2>
        <div>
          <div>
            <input
              className="input input_text"
              type="text"
              value={this.state.inputText}
              onChange={this.handleInputText}
              placeholder="予定を入力してください"
            />
            <input
              className="input input_time"
              type="time"
              value={this.state.inputTime}
              onChange={this.handleInputTime}
              required/>
          </div>
          <div>
            <button
              className="button"
              onClick={() => this.handleRegisterButton(date)}>
              登録
            </button>
          </div>
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