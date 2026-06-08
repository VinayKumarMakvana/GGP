// App.js
import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const App = () => {
  return (
    <div>
      <h1>My Todo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};
export default App;

