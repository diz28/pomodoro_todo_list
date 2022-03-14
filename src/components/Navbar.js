import React, { Component } from "react";

class Navbar extends Component {
  render = () => {
    return (
      <div className="col-12">
        <h2 className="bg-primary text-white text-center p2">
          {this.props.name} Pomodoro Todo List
        </h2>
      </div>
    );
  };
}
export default Navbar;
