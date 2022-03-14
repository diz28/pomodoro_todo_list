import "./components/App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import TodoRows from "./components/TodoRows";
import Timer from "./Timer";
import Setting from "./components/Setting";
import SettingContext from "./components/SettingContext";

class App extends Component {
  constructor(props) {
    super(props);
    this.stateHandler = this.stateHandler.bind(this);
    this.state = {
      userName: "Di Zhang",
      setting: false,
      studyTime: 45,
      breakTime: 15,
      todoItems: [
        { action: "Do project 1", done: false },
        { action: "Run for 30 min", done: false },
        { action: "water plante", done: false },
      ],
      newTodo: "",
    };
  }

  updateValue = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  newTodo = () => {
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        { action: this.state.newTodo, done: false },
      ],
    });
  };

  todoRows = () =>
    this.state.todoItems.map((item) => (
      <TodoRows key={item.action} item={item} callback={this.toggleDone} />
    ));

  toggleDone = (todo) =>
    this.setState({
      todoItems: this.state.todoItems.map((item) =>
        item.action === todo.action ? { ...item, done: !item.done } : item
      ),
    });

  stateHandler = () => {
    this.setState({
      studyTime: 45,
      breakTime: 15,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <Navbar name={this.state.userName} />
          <div class="d-flex justify-content-center">
            <SettingContext.Provider
              value={{
                studyTime: this.state.studyTime,
                breakTime: this.state.breakTime,
              }}
            >
              {this.state.setting ? <Setting /> : <Timer />}
            </SettingContext.Provider>
          </div>
          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Complete</th>
                </tr>
              </thead>
              <tbody>{this.todoRows()}</tbody>
            </table>
          </div>
          <div className="col-12">
            <input
              className="form-control"
              value={this.state.newTodo}
              onChange={this.updateValue}
            />
            <button className="btn btn-primary" onClick={this.newTodo}>
              New Task
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
