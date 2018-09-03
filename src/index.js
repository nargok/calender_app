import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import WEEKDAYS from './components/weekDays'

class Calender extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hello</h1>
        <table>
          <WEEKDAYS />
        </table>
      </React.Fragment>
    )
  }
}


ReactDOM.render(<Calender />, document.getElementById('root'));
registerServiceWorker();
