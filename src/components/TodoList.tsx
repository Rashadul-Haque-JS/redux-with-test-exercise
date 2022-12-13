import React, { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { RootState, AppDispatch } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, sortTodos } from "../features/todoSlicer";

const TodoList = () => {
  const [newTodoText, setNewTodoText] = useState<string>("");
  
  const todos = useSelector((state: RootState) => state.todo.todos);
  const filterDescending = useSelector(
    (state: RootState) => state.todo.filterDescending
  );
  
  const dispatch = useDispatch<AppDispatch>();
  const addNewTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addTodo(newTodoText));
    setNewTodoText("");
  };

  const sortTodo = () => {
    !filterDescending ? dispatch(sortTodos(true)) : dispatch(sortTodos(false));
  };

  return (
    <>
      <form onSubmit={addNewTodo}>
        <input
          placeholder="Skriv en todo..."
          onChange={(event) => setNewTodoText(event.target.value)}
          value={newTodoText}
        ></input>
        <button type="submit" disabled={newTodoText.length === 0}>
          Lägg till
        </button>
      </form>
      <h2>
        Todo
        <button onClick={sortTodo}>
          {filterDescending ? <FaArrowUp /> : <FaArrowDown />}
        </button>
      </h2>

      {todos.length ? (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}{" "}
              <button onClick={() => dispatch(removeTodo(todo.id))}>
                Ta bort
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Du har inga todos</p>
      )}
    </>
  );
};

export default TodoList;
