// App.js

import React, { Component } from "react";
import Overview from "./components/Overview";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      task: e.target.value,
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();

    this.child.addTask(this.state.task);
    this.setState({
      task: "",
    });
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <div className="col-6 mx-auto mt-5">
        <form onSubmit={this.onSubmitTask}>
          <div className="form-group">
            <label htmlFor="taskInput">Enter task</label>
            <input
              onChange={this.handleChange}
              value={task}
              type="text"
              id="taskInput"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Add Task
            </button>
          </div>
        </form>

        <Overview onRef={(ref) => (this.child = ref)} />
      </div>
    );
  }
}

export default App;
