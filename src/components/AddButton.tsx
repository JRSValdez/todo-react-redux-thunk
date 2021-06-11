import React from "react";
import { IRoot } from "../interfaces";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/actions/todosActions";

const AddButton = () => {
  const dispatch = useDispatch();
  const todosState = useSelector((state: IRoot) => state.todos);

  const handleAddTodo = () => {
    dispatch(addTodo(todosState.inputValue));
  };

  return (
    <button onClick={handleAddTodo} className="btn btn-block btn-success">
      Add
    </button>
  );
};

export default AddButton;
