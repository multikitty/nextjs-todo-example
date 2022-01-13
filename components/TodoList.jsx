import React from "react";
import PropTypes from "prop-types";
import { FaTrash, FaCheckCircle } from "react-icons/fa";

const Todolist = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <div>
      {todos.length <= 0 ? (
        <div className=" mt-24">
          <p className="text-white text-xl ">There is no Todo yet</p>
        </div>
      ) : (
        todos.map((todo, index) => (
          <div key={index} className={"px-5 py-2 "}>
            <ul className="">
              <li className="flex justify-between  ">
                <p
                  className={`text-white capitalize border-l-4 pl-2 ${
                    todo.completed ? "border-l-lime-700" : "border-l-red-700"
                  } `}
                >
                  {todo.text}{" "}
                </p>
                <div>
                  <button className=" p-2" onClick={() => deleteTodo(todo.id)}>
                    <FaTrash className="text-red-700" />
                  </button>
                  <button className="" onClick={() => completeTodo(todo.id)}>
                    <FaCheckCircle className="text-green-700" />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

Todolist.propTypes = {
  todos: PropTypes.array,
  deleteTodo: PropTypes.func,
};

export default Todolist;
