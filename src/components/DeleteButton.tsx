import React from "react";
import { IButtonProps } from "./interfaces";
import { useDispatch } from "react-redux";
import { removeTodo } from "../redux/actions/todosActions";

const DeleteButton = ({ style, todoId }: IButtonProps) => {
  const dispatch = useDispatch();

  const handleDeleteTodo = () => {
    dispatch(removeTodo(todoId));
  };

  return (
    <div style={{ ...style }}>
      <button onClick={handleDeleteTodo} className="btn btn-danger">
        Delete
      </button>
    </div>
  );
};

export default DeleteButton;
