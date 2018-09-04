import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    const currentMonth = this.props.current.formatDate()
    return (
      <div>
        <h2>
          <span className="left-arrow">&lt; </span>
          <span className="right-arrow">&gt; </span>
           {currentMonth}
        </h2>
      </div>
    )
  }
}

export default Header;