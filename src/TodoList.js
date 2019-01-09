import React from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import { fetchTodos } from "./store";

class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }
  render() {
    const { todos } = this.props;
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
  todos: state
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(fetchTodos())
});

const ConnectedTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default ConnectedTodoList;
