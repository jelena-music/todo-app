import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './TodoList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <TodoList/>
      </header>
    </div>
  );
}

export default App;
