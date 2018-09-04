import React, { Component } from 'react'

class Header extends Component {
  render() {
    const currentMonth = this.props.current.formatDate()
    return (
      <div>
        <h2>
          <span>&lt; </span><span>&gt; </span>
           {currentMonth}
        </h2>
      </div>
    )
  }
}

export default Header;