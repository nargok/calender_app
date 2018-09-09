import React, { Component } from 'react';
import _ from 'lodash';
import classnames from 'classnames';

import CustomDate from '../components/customDate';
import './dateList.css';

 class DateList extends Component {
  isTody = (date) => {
    const today = new CustomDate(new Date());
    return date.formatDate() === today.formatDate();
  }

  render() {
    const dateList = _.map(this.props.dateList, (date, index) => {
      return <td
               key={index}
               className={classnames("date", { "today" : this.isTody(date) })}
               onClick={() => this.props.selectDate(date)}>{date.date}
             </td>
    })

    return (
      <tr>{dateList}</tr>
    )
  }
}

export default DateList;