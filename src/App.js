import "./components/App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Pomodoro from "./Pomodoro";
import TrashBtn from "./components/TrashBtn";
import { nanoid } from "nanoid";

class App extends Component {
  data;

  /**
   * construct for app.js
   * @param  {string} action uses task input
   * @param  {boolean} done used to mark checkbox
   * @param  {nanoid} id make every item unique
   */
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.state = {
      userName: "Di Zhang",
      todoItems: [
        { id: nanoid(), action: "finish project", done: false },
        { id: nanoid(), action: "walk dog", done: false },
      ],
      newTodo: "",
    };
  }

  /**
   * used for onClick method to update state when new todos are added to the list
   */
  newTodo = () => {
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        { id: nanoid(), action: this.state.newTodo, done: false },
      ],
    });
  };

  /**
   * help to format the todo list nicely
   */
  todoRows = () =>
    this.state.todoItems.map((item) => (
      <tr key={item.action}>
        <td>{item.action}</td>
        <td>
          <input
            type="checkbox"
            defaultChecked={item.done}
            onChang={() => this.toggleDone(item)}
          />

          <TrashBtn
            type="submit"
            onClick={() => this.deleteTodo(item)}
            onChange={this.handleChange}
          />
        </td>
      </tr>
    ));

  deleteTodo = (todo) =>
    this.setState({
      todoItems: this.state.todoItems
        .filter((item) => {
          return item.id !== todo.id;
        })
        .map((item) => item),
    });

  /**
   * update the state when the check box is clicked
   */
  toggleDone = (todo) =>
    this.setState({
      todoItems: this.state.todoItems.map((item) =>
        item.id === todo.id ? { ...item, done: !item.done } : item
      ),
    });

  /**
   * get the data from the localStorage to display in the todo list
   */
  componentDidMount() {
    this.data = JSON.parse(localStorage.getItem("item"));
    if (localStorage.getItem("item")) {
      this.setState({
        todoItems: this.data,
      });
    } else {
      this.setState({
        id: "",
        action: "",
        done: "",
      });
    }
  }

  /**
   * submit the user data to the local storage
   */
  handleFormSubmit(event) {
    event.preventDefault();
    localStorage.setItem("item", JSON.stringify(this.state.todoItems));
  }

  /**
   * update the user input(todos) to the state
   */
  handleChange = (event) => {
    this.setState({ newTodo: event.target.value, id: event.target.id });
  };

  /**
   * renders display for user
   */
  render() {
    return (
      <div className="container">
        <div className="row">
          <Navbar name={this.state.userName} />
          <div class="d-flex justify-content-center">
            <Pomodoro />
          </div>
          <form onSubmit={this.handleFormSubmit}>
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
                onChange={this.handleChange}
              />
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.newTodo}
              >
                New Task
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
