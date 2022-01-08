import React, { useState } from "react";
import Todolist from "./TodoList";

const Todos = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    setTodos([...todos, { id: Math.floor(Math.random() * 1000), text }]);
    setTimeout(() =>{
        setText('')
    },500)
  };

  const handleDeleteTodo = (id) =>{
    const allTodos = [...todos]
    const filteredTodo = allTodos.filter(todo => todo.id !==id)
    setTodos(filteredTodo)
  }

  return (
    <div className="bg-green-500">
      <input
        type={"text"}
        placeholder="todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>
          Add Todo
      </button>
      <Todolist todos={todos} deleteTodo={handleDeleteTodo} />
    </div>
  );
};

export default Todos;
