import React, { useState } from "react";
import Todolist from "./TodoList";
import { toast } from "react-toastify";
import { v4 as uudiv4 } from "uuid";
import Input from "./Input";

const Todos = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (text !== "" && text !== " ") {
      setTodos([...todos, { id: uudiv4(), text, completed: false }]);
      toast.success("Todo Added", {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
        theme: "colored",
      });
    }
  };

  const handleDeleteTodo = (id) => {
    const allTodos = [...todos];
    const filteredTodo = allTodos.filter((todo) => todo.id !== id);
    setTodos(filteredTodo);
    toast.error("Todo Deleted",{
      position:'bottom-right',
      autoClose:3000,
      closeOnClick:true,
      theme:'colored',
      icon:false
    })
  };

  const handleCompleteTodo = (id) => {
    const allTodos = [...todos];
    const todo = allTodos.findIndex((todo) => todo.id === id);
    let newTodo = allTodos[todo];
    newTodo.completed = true;
    allTodos[todo] = newTodo;
    setTodos(allTodos);
    toast.success("Todo Completed",{
      position:'top-right',
      autoClose:3000,
      theme:"colored",
      
    })
  };

  return (
    <div className="bg-stone-700  max-w-xl mx-auto py-2 my-4 drop-shadow-lg rounded-lg h-96 absolute inset-20">
      <Input addTodo={handleAddTodo} getTerm={(q) => setText(q)} />
      <Todolist
        todos={todos}
        deleteTodo={handleDeleteTodo}
        completeTodo={handleCompleteTodo}
      />
    </div>
  );
};

export default Todos;
