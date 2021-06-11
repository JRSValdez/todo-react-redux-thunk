import React from "react";
import { useDispatch } from "react-redux";
import { completeTodo } from "../redux/actions/todosActions";

import { IButtonProps } from "./interfaces";

const CompleteButton = ({ style, todoId }: IButtonProps) => {
  const dispatch = useDispatch();

  const handleCompleteTodo = () => {
    dispatch(completeTodo(todoId));
  };
  return (
    <div style={{ ...style }}>
      <button onClick={handleCompleteTodo} className="btn btn-info">
        Complete
      </button>
    </div>
  );
};

export default CompleteButton;
