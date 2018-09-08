import React, { Component } from 'react';
import './header.css';

class Header extends Component {

  handleTodayButton = () => {
    const date = new Date();
    this.props.moveMonth(date.getFullYear(), date.getMonth());
  }

  render() {
    const currentMonth = this.props.current.formatMonth()
    return (
      // TODOここをinline-blockにする
      <div>
        <div role="button"
          className="this_month_button"
          onClick={this.handleTodayButton}>
          今月
        </div>
        <h2 className="header">
          <span
            className="left-arrow"
            onClick={this.props.lastMonth}>
            &lt;
          </span>
          <span
            className="right-arrow"
            onClick={this.props.nextMonth}>
            &gt;
          </span>
           {currentMonth}
        </h2>
      </div>
    )
  }
}

export default Header;