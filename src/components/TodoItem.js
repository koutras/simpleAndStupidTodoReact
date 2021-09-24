import React from "react";




const TodoItem = ({todo, toggleTodo}) => {

  const change = () => {
    toggleTodo();
  }

  return (
    <li>
      <label>
        <input onChange = {change} type="checkbox" checked={todo.done} />
        &nbsp;
        {todo.done ? <strike>{todo.title}</strike> : <span>{todo.title}</span>}
      </label>
    </li>
  );
};

export default TodoItem;
