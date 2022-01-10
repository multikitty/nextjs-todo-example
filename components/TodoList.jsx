import React from "react";
import PropTypes from 'prop-types'

const Todolist = ({ todos, deleteTodo }) => {
  return (
    <div>
      {todos.length < 0 ? (
        <div>no any todo</div>
      ) : (
        todos.map((todo, index) => (
          <div key={index}>
            <ul>
              <li>
                {todo.text}{" "}
                <button
                  className="bg-red-500 p-2"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
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
  todos: PropTypes.object,
  deleteTodo:PropTypes.func
}

export default Todolist;
