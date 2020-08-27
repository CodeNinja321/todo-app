import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Take dogs for a walk', 'Take out trash']);
  const [input, setInput] = useState('');

  const addTodo = event => {
    event.preventDefault();
    setTodos([...todos, input]);
    setInput('');
  }

  return (
    <div className="app">
      <form>
        <input value={input} onChange={event => setInput(event.target.value)} />
        <button type='submit' onClick={addTodo}>Add ToDo</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
