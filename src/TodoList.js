import React from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import { fetchTodos } from "./store";

class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }
  render() {
    const { todos, fetchStatus } = this.props;
    if (fetchStatus !== "loaded") {
      return <h2>Imagine a beautiful spinner here :D</h2>;
    }
    return (
      <>
        {todos.map((todo, idx) => (
          <TodoItem key={idx} {...todo} />
        ))}
      </>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
  fetchStatus: state.fetchStatus
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(fetchTodos())
});

const ConnectedTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default ConnectedTodoList;
