import { ADD_TODO, INPUT_CHANGE, REMOVE_TODO } from "../types";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { ITodosInitialState } from "../../interfaces";

export const inputChange = (description: string) => {
  return async (dispatch: ThunkDispatch<ITodosInitialState, void, Action>) => {
    return dispatch({
      type: INPUT_CHANGE,
      payload: description,
    });
  };
};

export const addTodo = (description: string) => {
  return async (dispatch: ThunkDispatch<ITodosInitialState, void, Action>) => {
    return dispatch({
      type: ADD_TODO,
      payload: {
        id: 100,
        description,
        completed: false,
      },
    });
  };
};
