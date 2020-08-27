import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, FormHelperText, Input } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo));
    })
  }, []);

  const addTodo = event => {
    event.preventDefault();
    db.collection('todos').add({
        todo: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
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
