import React from 'react';

const Todolist = ({todos}) => {
    return (
        <div>
            {todos.length <0 ? (
                <div>
                    no any todo
                </div>
            ): todos.map((todo,index) => (
                <div key={index}>
                    <ul>
                        <li>
                            {todo.text}
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Todolist;
