import { useReducer, useContext, createContext } from "react";
const initialState = [
  {
    id: 1,
    title: "Todo 1",
    description: "Todo 1 description",
    completed: false,
  },
];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    case "COMPLETE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "EDIT_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              title: action.payload.title,
              description: action.payload.description,
            }
          : todo
      );
    case "SAVE_LOCAL_STORAGE":
      localStorage.setItem("todos", JSON.stringify(state));
      return state;
    case "GET_LOCAL_STORAGE":
      return (state = JSON.parse(localStorage.getItem("todos")));
    default:
      return state;
  }
};

export const TodoContexT = createContext();

export const TodoProvider = ({ children }) => {
  return (
    <TodoContexT.Provider value={useReducer(todoReducer, initialState)}>
      {children}
    </TodoContexT.Provider>
  );
};

export const useTodo = () => useContext(TodoContexT);
