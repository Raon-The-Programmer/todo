import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css'

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');

  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, id: Date.now(), status: 'Not Completed' }]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, ...updatedTodo } : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleStatus = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, status: todo.status === 'Not Completed' ? 'Completed' : 'Not Completed' } : todo
      )
    );
  };

  const filterTodos = (status) => {
    if (status === 'All') {
      return todos;
    }
    return todos.filter((todo) => todo.status === status);
  };

  return (
    <div className="app">
      <h2 style={{color:"#13AD89",fontSize:"2rem",fontFamily:"monospace",display:"flex",justifyContent:"center"}}>My Todo List</h2>
      <TodoForm addTodo={addTodo} />
      <div className="filters">
        <span>Status Filter:</span>
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Not Completed">Not Completed</option>
        </select>
      </div>
      <TodoList
        todos={filterTodos(filter)}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
        toggleStatus={toggleStatus}
      />
    </div>
  );
};

export default App;
