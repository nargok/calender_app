import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import CustomDate from './components/customDate';
import DropDown from './components/dropDown';
import Header from './components/header/header';
import WeeKDays from './components/weekDays';
import WeekList from './components/weekList';

class Calender extends Component {
  constructor() {
    super()
    this.state = {
      current: new CustomDate(new Date())
    }
  }

  moveMonth = (year, month) => {
    const current = this.state.current
    const newDate = new CustomDate(
      year, month, current.date
    )
    this.setState({ current: newDate })
  }

  moveLastMonth = () => {
    const currentYear = this.state.current.year
    const prevMonth = this.state.current.month - 1;
    this.moveMonth(currentYear, prevMonth);
  }

  moveNextMonth = () => {
    const currentYear = this.state.current.year
    const nextMonth = this.state.current.month + 1;
    this.moveMonth(currentYear, nextMonth);
  }

  render() {
    return (
      <React.Fragment>
        <h1>Hello</h1>
        <div className="wrapper">
          <div className="calender_area">
            <DropDown
              current={this.state.current}
              moveMonth={this.moveMonth}/>
            <Header
              current={this.state.current}
              lastMonth={this.moveLastMonth}
              nextMonth={this.moveNextMonth}
              moveMonth={this.moveMonth}
            />
            <table>
              <WeeKDays />
              <WeekList current={this.state.current} />
            </table>
          </div>
          <div className="schedule_area">
            <h2>2018/9/7の予定</h2>
            <div>
              <input type="text" />
              <input type="time" />
              <button>登録</button>
            </div>
            <table>
              <thead>
                <tr>
                  <th>時間</th><th>予定</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10:00</td>
                  <td>Bプロジェクト定例会議</td>
                </tr>
                <tr>
                  <td>11:30</td>
                  <td>移動</td>
                </tr>
                <tr>
                  <td>13:00</td>
                  <td>XX株式会社打ち合わせ</td>
                </tr>
                <tr>
                  <td>17:00</td>
                  <td>経営戦略会議</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    )
  }
}


ReactDOM.render(<Calender />, document.getElementById('root'));
registerServiceWorker();
