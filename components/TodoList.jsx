import React from "react";
import PropTypes from 'prop-types'

const Todolist = ({ todos, deleteTodo,completeTodo }) => {
  return (
    <div>
      {todos.length < 0 ? (
        <div>no any todo</div>
      ) : (
        todos.map((todo, index) => (
          <div key={index} className={todo.completed ? 'bg-green-800' : 'bg-gray-700'} >
            <ul>
              <li>
                {todo.text}{" "}
                <button
                  className="bg-red-500 p-2"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
                <button className="bg-purple-600" onClick={() => completeTodo(todo.id)}>
                  done
                </button>
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
