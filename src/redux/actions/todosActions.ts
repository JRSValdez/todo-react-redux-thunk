import { ADD_TODO, INPUT_CHANGE, REMOVE_TODO, SET_COMPLETE } from "../types";
import { v4 as uuidv4 } from "uuid";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { ITodosInitialState } from "../../interfaces";

export const removeTodo = (todoId: string) => {
  return async (dispatch: ThunkDispatch<ITodosInitialState, void, Action>) => {
    return dispatch({
      type: REMOVE_TODO,
      payload: todoId,
    });
  };
};

export const completeTodo = (todoId: string) => {
  return async (dispatch: ThunkDispatch<ITodosInitialState, void, Action>) => {
    return dispatch({
      type: SET_COMPLETE,
      payload: todoId,
    });
  };
};

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
        id: uuidv4(),
        description,
        completed: false,
      },
    });
  };
};
