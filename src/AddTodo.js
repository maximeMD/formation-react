import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addTodo } from "./store";

class AddTodo extends React.Component {
  state = { value: "" };
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  handleSubmit = () => {
    // console.log(this.state.value);
    // console.log(this.props);
    this.props.onTodoAdd(this.state.value);
    this.setState({ value: "" });
  };
  render() {
    return (
      <>
        <label>
          New element:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" onClick={this.handleSubmit} />
      </>
    );
  }
}
AddTodo.propTypes = {
  onTodoAdd: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  onTodoAdd: label => dispatch(addTodo(label))
});
const ConnectedAddTodo = connect(
  null,
  mapDispatchToProps
)(AddTodo);

export default ConnectedAddTodo;
