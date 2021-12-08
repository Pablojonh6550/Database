import React, { useState } from 'react';
import './App.css';

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
      <div className='container'></div>
      
    </>
  );
  
}

export default App;