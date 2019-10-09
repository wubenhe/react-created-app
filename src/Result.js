import React, { Component } from "react";
import axios from "axios";

export default class Result extends Component {
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
    const header = Object.keys(result[0]);

    return (
      <table  className="table">
        <thead>
          <tr>
            {header.map(h => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {result.map((r, index) => (
            <tr key={index}>
              {Object.values(r).map(data => (
                <td key={data}>{data}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
