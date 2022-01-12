import React from "react";
import PropTypes from 'prop-types'
import {FaTrash,FaCheckCircle} from 'react-icons/fa'

const Todolist = ({ todos, deleteTodo,completeTodo }) => {
  return (
    <div>
      {todos.length < 0 ? (
        <div>no any todo</div>
      ) : (
        todos.map((todo, index) => (
          <div key={index} className={'px-5 py-2 '} >
            <ul className="">
              <li className="flex justify-between ">
                {todo.text}{" "}
               <div>
               <button
                  className=" p-2"
                  onClick={() => deleteTodo(todo.id)}
                >
                  <FaTrash  className="text-red-700"/>
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
  deleteTodo:PropTypes.func
}

export default Todolist;
