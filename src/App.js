import "./components/App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import TodoRows from "./components/TodoRows";
import Pomodoro from "./Pomodoro";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Di Zhang",
      todoItems: [
        { action: "Do project 1", done: false },
        { action: "Run for 30 min", done: false },
        { action: "water plante", done: false },
      ],
      newTodo: "",
      user: "",
      rememberMe: false,
    };
  }

  // setData = () => {
  //   localStorage.setItem("myData", JSON.stringify(this.state.todoItems));
  // };

  updateValue = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  newTodo = () => {
    localStorage.setItem("item", JSON.stringify(this.state.todoItems));
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        { action: this.state.newTodo, done: false },
      ],
    });
  };

  //       <input
  //         name="rememberMe"
  //         checked={this.state.rememberMe}
  //         onChange={this.handleChange}
  //         type="checkbox"
  //       />

  //   <tr>
  //   <td>{this.props.item.action}</td>
  //   <td>
  //     <input
  //       type="checkbox"
  //       defaultChecked={this.props.item.done}
  //       onChang={() => this.callback(this.props.item)}
  //     />
  //   </td>
  // </tr>

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

  // componentWillUnmount(nextProps, nextState) {
  //   localStorage.setItem("item", JSON.stringify(this.state.todoItems));
  // }

  stateHandler = () => {
    this.setState({
      studyTime: 45,
      breakTime: 15,
    });
  };

  handleChange = (event) => {
    const input = event.target;
    const value = input.type === "checkbox" ? input.checked : input.value;

    this.setState({ [input.newTodo]: value });
  };

  handleFormSubmit = () => {
    const { newTodo, done } = this.state;
    localStorage.setItem("done", done);
    localStorage.setItem("newTodo", done ? newTodo : "");
  };

  componentDidMount() {
    const item = localStorage.getItem("item");
    console.log(item);
    //this.setState({ todoItems: JSON.stringify(item) });
  }

  render() {
    return (
      //
      //     <label>
      //       User:{" "}
      //       <input
      //         name="user"
      //         value={this.state.user}
      //         onChange={this.handleChange}
      //       />
      //     </label>
      //     <label>
      //       <input
      //         name="rememberMe"
      //         checked={this.state.rememberMe}
      //         onChange={this.handleChange}
      //         type="checkbox"
      //       />
      //       Remember me
      //     </label>
      //     <button type="submit">Sign In</button>
      //
      // );
      <div className="container">
        <div className="row">
          <Navbar name={this.state.userName} />

          <div class="d-flex justify-content-center">
            <Pomodoro />
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
