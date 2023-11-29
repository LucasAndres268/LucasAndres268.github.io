// TaskForm.jsx
import React, { useState } from 'react';
import './TaskForm.css';

const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleAddTask = () => {
    if (taskName.trim() !== '') {
      onAddTask(taskName);
      setTaskName('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskName}
        onChange={e => setTaskName(e.target.value)}
      />
      <button className="name"   onClick={handleAddTask}>Agregar Tarea</button>
    </div>
  );
};

export default TaskForm;
