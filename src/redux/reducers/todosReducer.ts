import DATA from "../../data/todos.json";
import { ITodo, ITodosInitialState } from "../../interfaces";
import { SET_COMPLETE, REMOVE_TODO, ADD_TODO, INPUT_CHANGE } from "../types";

const todos: ITodo[] = DATA.todos;
const initialState: ITodosInitialState = {
  inputValue: "",
  todos,
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case INPUT_CHANGE:
      return { ...state, inputValue: action.payload };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id != action.payload),
      };
    case SET_COMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            todo.completed = true;
          }
          return todo;
        }),
      };
    default:
      return state;
  }
}
