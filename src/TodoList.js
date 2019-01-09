import React from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList({ todos }) {
  // console.log(data);
  return (
    <>
      {todos.map((todo, idx) => (
        <TodoItem key={idx} {...todo} />
      ))}
    </>
  );
}

const mapStateToProps = state => ({
  todos: state
});

const ConnectedTodoList = connect(mapStateToProps)(TodoList);

export default ConnectedTodoList;
