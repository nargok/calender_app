import React, { Component } from 'react'

class Schedule extends Component {
  render() {
    const date = this.props.selectedDate.formatDate();
    return (
      <React.Fragment>
        <h2>{date}の予定</h2>
        <div>
          <input type="text" />
          <input type="time" />
          <button>登録</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>時間</th><th>予定</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10:00</td>
              <td>Bプロジェクト定例会議</td>
            </tr>
            <tr>
              <td>11:30</td>
              <td>移動</td>
            </tr>
            <tr>
              <td>13:00</td>
              <td>XX株式会社打ち合わせ</td>
            </tr>
            <tr>
              <td>17:00</td>
              <td>経営戦略会議</td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}

export default Schedule;