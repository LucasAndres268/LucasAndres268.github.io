// TaskList.jsx
import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';


const TaskList = ({ tasks, onTaskComplete, onDeleteTask }) => {
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onTaskComplete={onTaskComplete}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
