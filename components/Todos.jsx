import React, { useState } from "react";
import Todolist from "./TodoList";
import { toast, ToastContainer } from "react-toastify";

const Todos = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    setTodos([
      ...todos,
      { id: Math.floor(Math.random() * 1000), text, completed: false },
    ]);
    setTimeout(() => {
      setText("");
    }, 500);
  };

  const handleDeleteTodo = (id) => {
    const allTodos = [...todos];
    const filteredTodo = allTodos.filter((todo) => todo.id !== id);
    setTodos(filteredTodo);
  };

  const handleCompleteTodo = (id) => {
    const allTodos = [...todos];
    const todo = allTodos.findIndex((todo) => todo.id === id);
    let newTodo = allTodos[todo];
    newTodo.completed = true;
    allTodos[todo] = newTodo;
    setTodos(allTodos);
  };

  const handleClearAllTodo = () =>{
    setTodos([])
  }

  return (
    <div className="bg-green-500">
      <input
        type={"text"}
        placeholder="todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearAllTodo} className="pl-2 bg-rose-600">Clear all</button>
      <Todolist
        todos={todos}
        deleteTodo={handleDeleteTodo}
        completeTodo={handleCompleteTodo}
      />
      <ToastContainer />
    </div>
  );
};

export default Todos;
