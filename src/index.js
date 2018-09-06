import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
// import './index.css';
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

  render() {
    return (
      <React.Fragment>
        <h1>Hello</h1>
        <DropDown current={this.state.current} />
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
