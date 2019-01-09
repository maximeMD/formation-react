import React from "react";
import { toggleTodo } from "./store";
import { connect } from "react-redux";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  handleChange = () => {
    const { completed, id } = this.props;
    this.props.onTodoCheck(!completed, id);
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
          checked={this.props.completed}
          onChange={this.handleChange}
        />
        <label>{this.props.title}</label>
      </p>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onTodoCheck: (completed, id) => dispatch(toggleTodo(id, completed))
});

const ConnectedTodoItem = connect(
  null,
  mapDispatchToProps
)(TodoItem);

export default ConnectedTodoItem;
