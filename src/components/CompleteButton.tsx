import React from "react";
import { IRoot } from "../interfaces";
import { useSelector } from "react-redux";

import { IButtonProps } from "./interfaces";

const CompleteButton = ({ style }: IButtonProps) => {
  const todosState = useSelector((state: IRoot) => state.todos);

  return (
    <div style={{ ...style }}>
      <button className="btn btn-info">Complete</button>
    </div>
  );
};

export default CompleteButton;
