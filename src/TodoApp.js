import React, {useState} from "react";
import TodoItem from "./components/TodoItem";

const initialTodos = [
  {
    title: "Learn React",
    done: false,
  },
  {
    title: "Go to Code.Hub",
    done: true,
  },
  {
    title: "Go out for a drink",
    done: false,
  },
];

const TodoApp = () => {


  const [todoList, setTodoList] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState("");

  const handleChange  = (event) => {
    if (event.target.value !== "")
      setNewTodo(event.target.value);
  }

  const removeTodo = (todo) => {
    if (!todo?.title) 
      return;
    let newTodoList = [...todoList];
    for (let i=0; i < todoList.length; i++) {
      if (todoList[i].title === todo.title)
        newTodoList.splice(i,1);
    }
    setTodoList(newTodoList);

  }

  const toggleTodo = (todo) => {
    if (!todo?.title) 
      return;
    let newTodoList = [...todoList];
    for (let i=0; i < todoList.length; i++) {
      if (todoList[i].title === todo.title)
        newTodoList[i].done = !newTodoList[i].done
    }
    setTodoList(newTodoList);

  }

  const addTodo = () => {
    let newTodoList = [...todoList];
    newTodoList.push({title: newTodo, done: false});
    setTodoList(newTodoList);
  }

  return (
    <div>
      <h2>My ToDos</h2>
        Add ToDo: <input type="text" onChange = {handleChange} />
        <button onClick={addTodo}>Add ToDo</button>

      <ul>
        {todoList.map((todo,index) => (
          <span>
          <TodoItem toggleTodo = {() => {toggleTodo(todo)}} key={todo.title} todo={todo} index={index} />
          <button onClick={() => removeTodo(todo)}>Remove todo</button>
          </span>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
