let COUNTER = 4;

var TODO_LIST_CONTENT = [
  {
    id: 1,
    label: "check this !",
    done: true
  },
  {
    id: 2,
    label: "or that ...",
    done: true
  },
  {
    id: 3,
    label: "don't touch that you fool !",
    done: false
  }
];

const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

export function addTodo(label) {
  return {
    type: ADD_TODO,
    label
  };
}

export function toggleTodo(id, done) {
  return {
    type: TOGGLE_TODO,
    id,
    done
  };
}

export default function rootReducer(state = TODO_LIST_CONTENT, action) {
  switch (action.type) {
    case ADD_TODO:
      COUNTER++;
      return [...state, { id: COUNTER, label: action.label, done: false }];
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, done: action.done };
        }
        return todo;
      });
    default:
      return state;
  }
}
