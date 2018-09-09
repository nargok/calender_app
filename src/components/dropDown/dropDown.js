import React, { Component } from 'react';

import '../../index.css';
import './dropDown.css';

class DropDown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      year: props.current.year,
      month: props.current.month + 1,
      maxYear: props.current.year
    }
  }

  optionLoop = (start, end) => {
    let i, opt;
    opt = [];

    for (i = start; i <= end; i++) {
      opt.push(i);
    }
    return opt;
  }

  generateOptions = (array) => {
    const items = array.map((value, index) => {
      return <option
               className="dropdown_content"
               key={index}
               value={value}>
               {value}
             </option>;
    })
    return items;
  }

  handleChangeYear = (e) => {
    this.setState({ year: e.target.value });
    this.updateMaxYear(e.target.value);
  }

  handleChangeMonth = (e) => {
    this.setState({ month: e.target.value })
  }

  updateMaxYear = (year) => {
    if (year > this.state.maxYear) {
      this.setState({ maxYear: year })
    }
  }

  handleDisplayButton = () => {
    const year = this.state.year;
    const month = this.state.month - 1;
    this.props.moveMonth(year, month);
  }

  prepareMaxYear = (currentYear, selectedYear) => {
    if (currentYear > selectedYear) {
      return currentYear;
    } else {
      return selectedYear;
    }
  }

  render() {
    const maxYear = this.prepareMaxYear(this.props.current.year, this.state.maxYear);
    const year_array = this.optionLoop(1950, maxYear);
    const year_items = this.generateOptions(year_array);
    const month_array = this.optionLoop(1, 12);
    const month_items = this.generateOptions(month_array);

    return (
      <div>
        <h3 className="calender_title">■年月選択</h3>
        <div>
        <select name="year"
          className="dropdown-select"
          defaultValue={maxYear}
          onChange={this.handleChangeYear}>
          {year_items}
        </select>
        <select name="month"
          className="dropdown-select"
          defaultValue={this.props.current.month + 1}
          onChange={this.handleChangeMonth}>
          {month_items}
        </select>
        </div>
        <div>
          <button
            className="button"
            onClick={this.handleDisplayButton}>
            表示
          </button>
        </div>
      </div>
    )
  }
}

export default DropDown;