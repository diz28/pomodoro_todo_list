import React, { Component } from "react";

class TodoRows extends Component {
  render = () => (
    <tr>
      <td>{this.props.item.action}</td>
      <td>
        <input
          type="checkbox"
          defaultChecked={this.props.item.done}
          onChang={() => this.callback(this.props.item)}
        />
      </td>
    </tr>
  );
}
export default TodoRows;
//       <input
//         name="rememberMe"
//         checked={this.state.rememberMe}
//         onChange={this.handleChange}
//         type="checkbox"
//       />
