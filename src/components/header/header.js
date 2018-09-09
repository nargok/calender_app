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
      <div>
        <div role="button"
          className="this_month_button"
          onClick={this.handleTodayButton}>
          今月
        </div>
        <div
          className="arrow"
          onClick={this.props.lastMonth}>
          &lt;
        </div>
        <div
          className="arrow"
          onClick={this.props.nextMonth}>
          &gt;
        </div>
        <h2 className="header">
           {currentMonth}
        </h2>
      </div>
    )
  }
}

export default Header;