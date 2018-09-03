import React from 'react';
import _ from 'lodash';


const WeeKDays = () => {
  const WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  let weekDays = _.map(WEEK_DAYS, (day, index) => <th key={index}>{day}</th>)

  return (
    <thead>
      <tr>{weekDays}</tr>
    </thead>
  )
}

export default WeeKDays;
