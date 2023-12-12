import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({ name: '', description: '' });

  const handleChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.name.trim() !== '' && todo.description.trim() !== '') {
      addTodo(todo);
      setTodo({ name: '', description: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{display:"flex",justifyContent:"space-around",margin:"4em"}}>
      <div style={{marginRight:"2em"}}>
        <label htmlFor="name" style={{display:"none"}}>Todo Name</label>
        <input type="text" id="name" name="name" value={todo.name} onChange={handleChange} placeholder='Title'/>
      </div>
      <div>
        <label style={{display:"none"}} htmlFor="description">Todo Description</label>
        <textarea style={{height:"20px",width:"15rem",resize:"both"}} id="description" name="description" value={todo.description} onChange={handleChange} placeholder='Description'></textarea>
      </div>
      <div>
        <button type="submit" style={{ backgroundColor: '#13AD89', color: '#fff',width:"5em",borderRadius:"3em",border:"none",padding:"5px",fontWeight:"bold" }}>
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
