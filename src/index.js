import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import rootReducer from "./store";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

function Header() {
  return <h1>Todo List</h1>;
}

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <TodoList />
        <AddTodo />
      </Provider>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
