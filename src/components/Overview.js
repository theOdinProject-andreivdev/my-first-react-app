// Overview.js

import { render } from "@testing-library/react";
import React, { Component } from "react";
import uniqid from "uniqid";

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
    console.log("create");
  }

  componentDidMount() {
    this.props.onRef(this);
  }
  componentWillUnmount() {
    this.props.onRef(undefined);
  }

  addTask(name) {
    this.setState({
      tasks: this.state.tasks.concat(name),
    });
  }

  removeTask(task) {
    let newtasks = [];
    for (let i = 0; i < this.state.tasks.length; i++) {
      if (this.state.tasks[i] != task) {
        newtasks.push(this.state.tasks[i]);
      }
    }
    console.log(newtasks);
    this.setState({
      tasks: newtasks,
    });
  }

  render() {
    return (
      <ul>
        {this.state.tasks.map((task) => {
          return (
            <li key={uniqid()} className="mt-3">
              {task}
              <button
                onClick={() => this.removeTask(task)}
                className="btn btn-dark float-right"
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Overview;
