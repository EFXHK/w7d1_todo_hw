import React, {useState} from 'react';
import './App.css';

function App() {

  const [todos, setTodos]= useState([
    "Buy Shopping",
    "Clean Bathroom",
    "Car's MOT",
  ]);

  const [newTodo, setNewTodo] = useState("");

  const todoNodes = todos.map((todo, index) => {
    return (
      <li key={index}>
        <span>{todo}</span>
      </li>
    );
  });

  const handleTodoInput = (event) => {
    setNewTodo(event.target.value)
  }

  const saveNewTodo = (event) => {
    event.preventDefault();
    const copyTodos = [...todos];
    copyTodos.push(newTodo);
    setTodos(copyTodos);
    setNewTodo("");
  }

  return (
    <div>
      <h1>todo list</h1>
      <hr></hr>
      <ul>{todoNodes}</ul>

      <form onSubmit={saveNewTodo}>
        <label htmlFor="new-todo">add a new todo item</label>
        <input 
        type="text" id="new-todo" 
        value={newTodo} 
        onChange={handleTodoInput}></input>
        <input 
        type="submit" 
        value="add new todo"></input>
      </form>
    </div>
  );
}

export default App;
