import React, { useState } from 'react';
import './App.css';
import Tasks from './components/tasks';
import AddTask from './components/AddTask';
import Button from './components/Button';

const App = () => {
  // let message = 'Hello World';
  const [tasks, setTasks] = useState([
    {
      id:'1',
      title:'Estudar programação',
      completed: false,
    },
    {
      id:'2',
      title:'Ler Livros',
      completed: true,
    }
  ]);

  return (
    <>
      <div className='container'>
        <AddTask />
        <Tasks tasks={tasks} />
      </div>
      
    </>
  );
  
}

export default App;