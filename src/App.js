import React from 'react';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  return (
    <div className="App">      
      <h5 className="text-danger mt-3 display-4">To do list</h5>
      <ToDoList />
    </div>
  );
}

export default App;
