import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  // const todos = [new Todo('Learn React'), new Todo('Learn Typescript')];
 

  return (
    <div>
      <NewTodo />
      <Todos items={todos} onRemoveTodo={onRemoveTodoHanlder}/>
    </div>
  );
}

export default App;
