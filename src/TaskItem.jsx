import React from 'react';
import './Taskltem.css';

const TaskItem = ({ task, onTaskComplete, onDeleteTask }) => {
  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {task.name}
      <button className='nam' onClick={() => onTaskComplete(task.id)}>Completar</button>
      <button className='nam' onClick={() => onDeleteTask(task.id)}>Eliminar</button>
    </li>
  );
};

export default TaskItem;
