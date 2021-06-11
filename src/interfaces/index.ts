//Root state
export interface IRoot {
  todos: ITodosInitialState;
}

//TODO
export interface ITodo {
  id: string;
  description: string;
  completed: boolean;
}

//TODOS initialstate
export interface ITodosInitialState {
  inputValue: string;
  todos: ITodo[];
}
