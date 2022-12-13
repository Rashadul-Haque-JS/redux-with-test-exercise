import React, { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../common/hook";
import { addTodo, removeTodo, sortTodos } from "./todoSlicer";

const TodoList = () => {
  const [newTodoText, setNewTodoText] = useState<string>("");

  const todos = useAppSelector((state) => state.todo.todos);
  const filterDescending = useAppSelector(
    (state) => state.todo.filterDescending
  );
  const dispatch = useAppDispatch();

  const addNewTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addTodo(newTodoText));
    setNewTodoText("");
  };

  const sortTodo = () => {
    !filterDescending ? dispatch(sortTodos(true)) : dispatch(sortTodos(false));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        border: "solid 4px #ff781f",
        color: "#fff"
        
      }}
    >
      <div
        style={{
          padding: "20px",
          boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
          background: "#ff781f",
          minHeight: "500px",
          borderRadius: "8px"
        }}
      >
        <form
          onSubmit={addNewTodo}
          style={{ width: "fit-content", padding: 20 }}
        >
          <input
            placeholder="Skriv en todo..."
            onChange={(event) => setNewTodoText(event.target.value)}
            value={newTodoText}
          ></input>
          <button type="submit" disabled={newTodoText.length === 0}>
            Lägg till
          </button>
        </form>
        <h2
          style={{
            textAlign: "center",
            border: "solid .5px #000",
            padding: "2px 10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Todo
          <button
            onClick={sortTodo}
            style={{
              background: "#000",
              color: "#fff",
              borderRadius: "2px",
              marginLeft: "12px",
            }}
            disabled={todos.length < 2}
          >
            {filterDescending ? (
              <FaArrowUp style={{ fontSize: ".7rem" }} />
            ) : (
              <FaArrowDown style={{ fontSize: ".7rem" }} />
            )}
          </button>
        </h2>

        {todos.length ? (
          <ul
            style={{
              width: "200px",
              padding: "12px 24px",
            }}
          >
            {todos.map((todo) => (
              <li
                key={todo.id}
                style={{
                  paddingLeft: "4px",
                  textTransform: "capitalize",
                  fontWeight: "500",
                  textAlign: "center",
                  color: "#000",
                }}
              >
                {todo.text}{" "}
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  style={{
                    width: "fit-content",
                    background: "#000",
                    color: "#fff",
                    padding: "2px",
                    borderRadius: "4px",
                    marginLeft: "12px",
                  }}
                >
                  Ta bort
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ textAlign: "center" }}>Du har inga todos</p>
        )}
      </div>
    </div>
  );
};

export default TodoList;
//
