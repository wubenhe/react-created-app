import React, { Component } from "react";
import axios from "axios";

export default class Count extends Component {
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

    return <div>Total Count: {result.length}</div>;
  }
}
