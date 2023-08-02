import React from 'react';

const Task = ({ task, toggleTask, deleteTask }) => {
  return (
    <div className="task">
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => toggleTask(task.id)}
      />
      <span className={task.done ? 'done' : ''}>{task.title}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
