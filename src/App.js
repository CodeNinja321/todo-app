import React, { useState } from 'react';
import { Button, FormControl, InputLabel, FormHelperText, Input } from '@material-ui/core';
import './App.css';
import Todo from './Todo';

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
        {/* <input value={input} onChange={event => setInput(event.target.value)} /> */}
        <FormControl>
          <InputLabel>✅  Write a ToDo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
        <Button disabled={!input} type='submit' onClick={addTodo} variant='contained' color='primary'>Add ToDo</Button>
      </form>
      <ul>
        {todos.map(todo => (
          <Todo todo={todo} deadline='tomorrow' />
        ))}
      </ul>
    </div>
  );
}

export default App;
