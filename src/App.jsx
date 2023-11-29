// App.jsx
import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import './App.css';

const App = () => {
  
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(storedTasks);

  useEffect(() => {
    
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleTaskComplete = taskId => {
    
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = taskId => {
    
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  const handleAddTask = taskName => {
  
    const newTask = {
      id: tasks.length + 1,
      name: taskName,
      completed: false,
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  return (
    <div>
      <h1><span>Mi</span> lista <span>de</span> tareas</h1>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onTaskComplete={handleTaskComplete}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default App;
