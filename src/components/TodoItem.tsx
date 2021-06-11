import React from "react";
import { ITodoItemProps } from "./interfaces";

const TodoItem = ({ description, style }: ITodoItemProps) => {
  return (
    <div style={{ ...style, fontSize: 18 }}>
      <p>{description}</p>
    </div>
  );
};

export default TodoItem;
