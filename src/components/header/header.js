import React, { Component } from 'react';
import './header.css';

class Header extends Component {

  handleTodayButton = () => {
    const date = new Date();
    this.props.moveMonth(date.getFullYear(), date.getMonth());
  }

  moveLastMonth = () => {
    const currentYear = this.props.current.year
    const prevMonth = this.props.current.month - 1;
    this.props.moveMonth(currentYear, prevMonth);
  }

  moveNextMonth = () => {
    const currentYear = this.props.current.year
    const nextMonth = this.props.current.month + 1;
    this.props.moveMonth(currentYear, nextMonth);
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
          onClick={this.moveLastMonth}>
          &lt;
        </div>
        <div
          className="arrow"
          onClick={this.moveNextMonth}>
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