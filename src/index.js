import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import CustomDate from './components/customDate';
import DropDown from './components/dropDown/dropDown';
import Header from './components/header/header';
import WeeKDays from './components/weekDays';
import WeekList from './components/weekList';
import Schedule from './components/schedule/schedule';

class Calender extends Component {
  constructor() {
    super()
    this.state = {
      current: new CustomDate(new Date()),
      selectedDate: new CustomDate(new Date())
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

  selectDate = (selectedDate) => {
    this.setState({ selectedDate: selectedDate })
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
              <WeekList
                current={this.state.current}
                selectDate={this.selectDate}
              />
            </table>
          </div>
          <div className="schedule_area">
            <Schedule selectedDate={this.state.selectedDate} />
          </div>
        </div>
      </React.Fragment>
    )
  }
}


ReactDOM.render(<Calender />, document.getElementById('root'));
registerServiceWorker();
