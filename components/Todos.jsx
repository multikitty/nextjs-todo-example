import React, { useState } from "react";
import Todolist from "./TodoList";
import { toast, ToastContainer } from "react-toastify";
import Input from "./Input";

const Todos = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([
    {id:1,text:'read book',completed:false},
    {id:1,text:'read book',completed:false},
    {id:1,text:'read book',completed:false},
  ]);

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
    <div className="bg-green-500 max-w-xl mx-auto py-2 my-4 drop-shadow-lg rounded-lg h-96 absolute inset-20">
      <Input addTodo={handleAddTodo} clearAll={handleClearAllTodo} getTerm={q => setText(q)} />
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
