import React from 'react';

const TodoList = ({ todos, updateTodo, deleteTodo, toggleStatus }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div key={todo.id} className="todo-wrapper">
          <div className="todo-card" style={{ backgroundColor: '#CCF5D3' }}>
            <div className="todo-content">
              <h3>{todo.name}</h3>
              <p>{todo.description}</p>
              <p>Status: {todo.status}</p>
            </div>
            <div className="todo-actions">
              <button onClick={() => toggleStatus(todo.id)} style={{ backgroundColor: '#13AD89', color: '#fff' }}>
                {todo.status === 'Not Completed' ? 'Completed' : 'Not Completed'}
              </button>
              <button onClick={() => updateTodo(todo.id, { ...todo, name: prompt('Update Todo:', todo.name) })} style={{ backgroundColor: '#13AD89', color: '#fff' }}>
                Edit
              </button>
              <button onClick={() => deleteTodo(todo.id)} style={{ backgroundColor: '#CF5E1F', color: '#fff' }}>
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
