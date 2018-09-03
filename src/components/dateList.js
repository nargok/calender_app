import React, { Component } from 'react';
import _ from 'lodash';

 class DateList extends Component {
  render() {
    const dateList = _.map(this.props.dateList, (date, index) => {
      return <td key={index}>{date.date}</td>
    })

    return (
      <tr>{dateList}</tr>
    )
  }
}

export default DateList;