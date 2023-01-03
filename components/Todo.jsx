import React from "react";

const Todo = ({ todo }) => {
  console.log(todo);
  return (
    <li>
      <h2
        contentEditable="true"
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.title}
      </h2>
      <p
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.description}
      </p>
    </li>
  );
};

export default Todo;
