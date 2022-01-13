import React from "react";
import { useState } from "react/cjs/react.development";
import PropTypes from "prop-types";

const Input = ({ addTodo, getTerm }) => {
  const [value, setValue] = useState("");

  const getValue = (event) => {
    setValue(event);
    getTerm(event);
  };

  return (
    <div className="mt-3">
      <input
        type={"text"}
        placeholder="todo..."
        value={value}
        onChange={(e) => getValue(e.target.value)}
        className="px-2 py-1 rounded-sm focus:outline-none w-6/12"
      />
      <button
        onClick={addTodo}
        className="bg-lime-600 text-white py-1 px-3 ml-2 rounded-sm"
      >
        Add{" "}
      </button>
    
    </div>
  );
};

Input.proptTypes = {
  addTodo:PropTypes.func,
  getTerm:PropTypes.func
}

export default Input;
