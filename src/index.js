import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
// import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import CustomDate from './components/customDate';
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

  moveMonth = (month) => {
    const current = this.state.current
    const newDate = new CustomDate(
      current.year, month, current.date
    )
    this.setState({ current: newDate })
  }

  moveLastMonth = () => {
    const prevMonth = this.state.current.month - 1;
    this.moveMonth(prevMonth);
  }

  moveNextMonth = () => {
    const nextMonth = this.state.current.month + 1;
    this.moveMonth(nextMonth);
  }

  optionLoop = (start, end) => {
    let i, opt;
    opt = [];

    for (i = start; i <= end; i++) {
      opt.push(i);
    }
    return opt;
  }

  render() {
    // 年の選択肢を定義
    const year_array = this.optionLoop(1950, this.state.current.year);
    const year_items = year_array.map((year, index) => {
      return <option key={index} value={year}>{year}</option>
    })

    const month_array = this.optionLoop(1, 12);
    const month_items = month_array.map((month, index) => {
      return <option key={index} value={month} >{month}</option>
    })

    return (
      <React.Fragment>
        <h1>Hello</h1>
        <select name="year" id="id_year" defaultValue={this.state.current.year}>
          {year_items}
        </select>
        <select name="month" id="id_month" defaultValue={this.state.current.month + 1}>
          {month_items}
        </select>

        <Header
          current={this.state.current}
          lastMonth={this.moveLastMonth}
          nextMonth={this.moveNextMonth}
        />
        <table>
          <WeeKDays />
          <WeekList current={this.state.current} />
        </table>
      </React.Fragment>
    )
  }
}


ReactDOM.render(<Calender />, document.getElementById('root'));
registerServiceWorker();
