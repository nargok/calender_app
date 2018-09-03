import React, { Component } from 'react';
import _ from 'lodash';

import CustomDate from './customDate';
import DateList from './dateList';

class WeekList extends Component {  
  getWeekList() {
    return this.generateWeekList(this.props.current)
  }

  generateWeekList = (current) => {
    let weekList = []
    const firstDay = new CustomDate(current.year, current.month, 1).day;
    const WEEK_START_DAY = 0; // Sunday
    let dateCount = firstDay === WEEK_START_DAY ? 1 : 1 - firstDay + WEEK_START_DAY; // これ、なにやってるんだろう？
    dateCount = dateCount > 1 ? dateCount - 7 : dateCount;
    _.times(6, (week) => {
      weekList.push([])
      _.times(7, (_day) => {
        weekList[week].push(new CustomDate(
          current.year, current.month, dateCount
        ))
        dateCount++;
      })
    })
    return weekList;
  }

  render() {
    const weekList = _.map(this.getWeekList(), (dateList) => {
      return <DateList dateList={dateList} />
    })

    return (
      <tbody>
        {weekList}
      </tbody>
    )
  }
}

export default WeekList;