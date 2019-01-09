import React from "react";
import { toggleTodo } from "./store";
import { connect } from "react-redux";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  handleChange = () => {
    const { done, id } = this.props;
    this.props.onTodoCheck(!done, id);
  };
  componentDidUpdate() {
    this.ref.current.style.border = "1px solid red";
    setTimeout(() => {
      this.ref.current.style.border = "none";
    }, 1000);
  }
  render() {
    return (
      <p ref={this.ref}>
        <input
          type="checkbox"
          checked={this.props.done}
          onChange={this.handleChange}
        />
        <label>{this.props.label}</label>
      </p>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onTodoCheck: (done, id) => dispatch(toggleTodo(id, done))
});

const ConnectedTodoItem = connect(
  null,
  mapDispatchToProps
)(TodoItem);

export default ConnectedTodoItem;
