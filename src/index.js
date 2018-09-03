import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import CustomDate from './components/customDate';
import WeeKDays from './components/weekDays';
import WeekList from './components/weekList';

// class CustomDate {
//   constructor(...args) {
//     const date = args.length === 1 ? args[0] : new Date(...args)
//     console.log(date)
//     this.year = date.getFullYear()
//     this.month = date.getMonth()
//     this.date = date.getDate()
//     this.day = date.getDay()
//   }
// }

class Calender extends Component {
  constructor() {
    super()
    this.state = {
      current: new CustomDate(new Date())
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1>Hello</h1>
        <table>
          <WeeKDays />
          <WeekList current={this.props.current} />
        </table>
      </React.Fragment>
    )
  }
}


ReactDOM.render(<Calender />, document.getElementById('root'));
registerServiceWorker();
