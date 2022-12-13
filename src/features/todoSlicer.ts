import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export type Todo = {
  id: string;
  text: string;
};

interface IState {
  todos: Todo[];
  filterDescending: boolean;
}

const initialState: IState = {
  todos: [],
  filterDescending: false,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,

  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo = { id: uuidv4(), text: action.payload };
      state.todos.push(newTodo);
    },

    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    sortTodos: (state, action: PayloadAction<boolean>) => {
      state.filterDescending = action.payload;
      state.todos.sort(
        (a, b) => (action.payload ? 1 : -1) * a.text.localeCompare(b.text)
      );
    },
  },
});

export const { addTodo, removeTodo, sortTodos } = todoSlice.actions;

export default todoSlice.reducer;
