let COUNTER = 4;

// var TODO_LIST_CONTENT = [
//   {
//     id: 1,
//     label: "check this !",
//     done: true
//   },
//   {
//     id: 2,
//     label: "or that ...",
//     done: true
//   },
//   {
//     id: 3,
//     label: "don't touch that you fool !",
//     done: false
//   }
// ];

const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const FETCH_TODOS = "FETCH_TODOS";
const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
const FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE";

export function fetchTodos() {
  return function(dispatch, getState) {
    dispatch({ type: FETCH_TODOS });
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(resp => resp.json())
      .then(data => dispatch({ type: FETCH_TODOS_SUCCESS, data }));
  };
}

export function addTodo(title) {
  return {
    type: ADD_TODO,
    title
  };
}

export function toggleTodo(id, completed) {
  return {
    type: TOGGLE_TODO,
    id,
    completed
  };
}

export default function rootReducer(state = [], action) {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
      return action.data;
    case ADD_TODO:
      COUNTER++;
      return [...state, { id: COUNTER, title: action.title, completed: false }];
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, completed: action.completed };
        }
        return todo;
      });
    default:
      return state;
  }
}
