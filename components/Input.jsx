import React from "react";
import { useState } from "react/cjs/react.development";

const Input = ({addTodo,clearAll,getTerm}) => {

    const [value, setVlalue] = useState('')

    const getValue = (event)=>{
        setVlalue(event)
        getTerm(event)
    }

  return (
    <div>
      <input
        type={"text"}
        placeholder="todo..."
        value={value}
        onChange={(e) => getValue(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={clearAll} className="pl-2 bg-rose-600">
        Clear all
      </button>
    </div>
  );
};

export default Input;
