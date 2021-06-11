import React from "react";
import { inputChange } from "../redux/actions/todosActions";
import { useDispatch } from "react-redux";

const TodoInput = () => {
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(inputChange(e.target.value));
  };

  return (
    <div style={{ width: "80%" }}>
      <input type="text" className="form-control" onChange={handleChange} />
    </div>
  );
};

export default TodoInput;
