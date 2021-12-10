import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

import './App.css';
import Tasks from './components/tasks';
import AddTask from './components/AddTask';
import Button from './components/Button';

const App = () => {

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
  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
        if (task.id == taskId) return {... task, completed: !task.completed};
        return task;
    
    });
    setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [... tasks, {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
    }];

    setTasks(newTasks);
  };

  return (
    <>
      <div className='container'>
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks tasks={tasks} />
      </div>
      
    </>
  );
  
};

export default App;