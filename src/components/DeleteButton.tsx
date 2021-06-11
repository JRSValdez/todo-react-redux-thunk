import React from "react";
import { IButtonProps } from "./interfaces";

const DeleteButton = ({ style }: IButtonProps) => {
  return (
    <div style={{ ...style }}>
      <button className="btn btn-danger">Delete</button>
    </div>
  );
};

export default DeleteButton;
