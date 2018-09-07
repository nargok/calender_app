import React, { Component } from 'react'

class DropDown extends Component {
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
      return <option key={index} value={value}>{value}</option>;
    })
    return items;
  }

  render() {
    // 年の選択肢を定義
    const year_array = this.optionLoop(1950, this.props.current.year);
    const year_items = this.generateOptions(year_array);

    const month_array = this.optionLoop(1, 12);
    const month_items = this.generateOptions(month_array);
    
    return (
      <div>
        <h3>年月選択</h3>
        <select name="year" id="id_year" defaultValue={this.props.current.year}>
          {year_items}
        </select>
        <select name="month" id="id_month" defaultValue={this.props.current.month + 1}>
          {month_items}
        </select>
      </div>
    )
  }
}

export default DropDown;