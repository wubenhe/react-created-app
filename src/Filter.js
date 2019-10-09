// import React from 'react'

// export default function Filter() {
//     return (
//       <div>
//         <select>
//           <option>Software Architect</option>
//           <option>Sales Representative</option>
//           <option>Marketing</option>
//           <option>Marketing Manager</option>
//           <option>VP of Sales</option>
//           <option>QA Manager</option>
//           <option>CFO</option>
//           <option>VP of Engineering</option>
//           <option>VP of Marketing</option>
//           <option>President and CEO</option>
//         </select>
//       </div>
//     );
// }

import React, { Component } from "react";
import axios from "axios";

export default class Filter extends Component {
  state = {
    result: []
  };
  async componentDidMount() {
    const result = await axios.get(
      "https://starry-academy-177207.firebaseio.com/employee.json"
    );
    this.setState({ result: result.data });
  }
  render() {
    const { result } = this.state;
    if (result.length === 0) {
      return null;
    }
    const titles = Array.from(new Set(result.map(r => r.title)));
    return (
      <div>
        <select>
          {titles.map(t => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
    );
  }
}
