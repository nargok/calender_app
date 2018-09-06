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
    this.moveMonth(--this.state.current.month)
  }

  moveNextMonth = () => {
    this.moveMonth(++this.state.current.month)
  }

  render() {
    return (
      <React.Fragment>
        <h1>Hello</h1>
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
