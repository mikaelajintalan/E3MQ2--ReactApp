import React from 'react';
import './App.css';
import { NewToDoModal } from './components/ToDoModal';
import { ToDoTable } from './components/ToDoTable';

const App = () => {
  return (
    <div className="App">
      <h3>ToDo App</h3>
      <div style={{ maxWidth: '70%', margin: 'auto' }}>
        <div style={{ textAlign: 'right' }}>
          <NewToDoModal />
        </div>
        <ToDoTable />
      </div>
    </div>
  );
}

export default App;
