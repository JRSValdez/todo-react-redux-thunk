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
    default:
      return state;
  }
}
