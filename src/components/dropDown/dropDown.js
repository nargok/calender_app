import React, { Component } from 'react';

import '../../index.css';
import './dropDown.css';

class DropDown extends Component {
  constructor() {
    super()
    this.state = {
      year: null,
      month: null
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

  handleChangeDropdown = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  handleDisplayButton = () => {
    const year = this.isNull(this.state.year) ? this.props.current.year : this.state.year;
    const month = this.isNull(this.state.month) ? this.props.current.month : this.state.month - 1;
    this.props.moveMonth(year, month);
  }

  isNull = (object) => {
    return (object === null);
  }

  render() {
    const year_array = this.optionLoop(1950, this.props.current.year);
    const year_items = this.generateOptions(year_array);
    const month_array = this.optionLoop(1, 12);
    const month_items = this.generateOptions(month_array);
    
    return (
      <div>
        <h3>年月選択</h3>
        <div>
        <select name="year"
          className="dropdown-select"
          defaultValue={this.props.current.year}
          onChange={this.handleChangeDropdown}>
          {year_items}
        </select>
        <select name="month"
          className="dropdown-select"
          defaultValue={this.props.current.month + 1}
          onChange={this.handleChangeDropdown}>
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