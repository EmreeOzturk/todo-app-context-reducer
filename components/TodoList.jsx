import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";
import Todo from "./Todo";
const TodoList = () => {
  const [value, setValue] = useState("");
  const [todos, dispatch] = useTodo();
  const [editedTodo, setEditedTodo] = useState();
  console.log(todos);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      title: value,
      description: value + " description",
      completed: false,
    };
    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });
    setValue("");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      <h1>Todo App</h1>
      <button
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginRight: "10px",
        }}
        onClick={() =>
          dispatch({
            type: "SAVE_LOCAL_STORAGE",
          })
        }
      >
        SAVE TO LOCAL STORAGE
      </button>
      <button
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginRight: "10px",
        }}
        onClick={() => {
          dispatch({
            type: "GET_LOCAL_STORAGE",
          });
        }}
      >
        GET LOCAL STORAGE
      </button>
      <form onSubmit={handleSubmit}>
        <input
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginRight: "10px",
          }}
          type="text"
          placeholder="Add Todo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginRight: "10px",
          }}
        >
          <span>Add Todo</span>
        </button>
      </form>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => {
          console.log(todo.id);
          return (
            <>
              <Todo key={todo.id} todo={todo} />
              <button
                onClick={() =>
                  dispatch({
                    type: "COMPLETE_TODO",
                    payload: todo.id,
                  })
                }
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  marginRight: "10px",
                  color: "white",
                  backgroundColor: "green",
                }}
              >
                <span>Complete</span>
              </button>
              <button
                onClick={() =>
                  dispatch({
                    type: "DELETE_TODO",
                    payload: todo.id,
                  })
                }
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  marginRight: "10px",
                  backgroundColor: "red",
                  color: "white",
                }}
              >
                <span>Delete</span>
              </button>
              <button
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  marginRight: "10px",
                  backgroundColor: "blue",
                  color: "white",
                }}
                onClick={() => {
                  const editedTodo = {
                    id: todo.id,
                    title: prompt("Enter new title"),
                    description: prompt("Enter new description"),
                  };
                  dispatch({
                    type: "EDIT_TODO",
                    payload: editedTodo,
                  });
                }}
              >
                <span>Edit</span>
              </button>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
