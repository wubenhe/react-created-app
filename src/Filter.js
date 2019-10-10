import React, { Component } from "react";
import axios from "axios";

 class Filter extends Component {
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
export default Filter;