import React from "react";
import { useState } from "react/cjs/react.development";

const Input = ({addTodo,clearAll,getTerm}) => {

    const [value, setVlalue] = useState('')

    const getValue = (event)=>{
        setVlalue(event)
        getTerm(event)
    }

  return (
    <div className="">
      <input
        type={"text"}
        placeholder="todo..."
        value={value}
        onChange={(e) => getValue(e.target.value)}
        className="px-2 py-1 rounded-sm focus:outline-none w-6/12"
      />
      <button onClick={addTodo}>Add </button>
      
    </div>
  );
};

export default Input;
