import React from "react";
import { useSelector } from "react-redux";
import { IRoot } from "../interfaces";

import { CompleteButton, DeleteButton, TodoItem } from "../components";

const TodoList = () => {
  const todosState = useSelector((state: IRoot) => state.todos);

  return (
    <div className="">
      {todosState.todos.map((todo) => (
        <div
          key={todo.id}
          className="d-flex justify-content-between border border-primary rounded my-2 px-2 py-2"
        >
          <TodoItem
            description={todo.description}
            completed={todo.completed}
            style={{ paddingLeft: 20 }}
          />
          <div className="d-flex">
            {!todo.completed && <CompleteButton todoId={todo.id} />}
            <DeleteButton todoId={todo.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
