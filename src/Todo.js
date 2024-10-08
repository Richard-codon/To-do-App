import React, { useState } from "react";
import Task from "./Task";

const Todo = () => {
    const [tasks, setTasks] = useState([]); // Initialize tasks state by an empty array 
    const [newTask, setNewTask] = useState('');// Initialize new tasks state by an empty string
  // function to toggle task
    const toggleTask = (taskId) => {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId ? { ...task, done: !task.done } : task
        )
      );
    };
  //function to add task
    const addTask = () => {
      if (newTask.trim() !== '') {
        const newTaskObj = {
          id: Date.now(),
          title: newTask,
          done: false,
        };
        setTasks((prevTasks) => [...prevTasks, newTaskObj]);
        setNewTask('');
      }
    };
  //function for deleting a task from the to do list
    const deleteTask = (taskId) => {
        
        if(window.confirm("Are you sure you want to delete?")){
            setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
        }
    };
  // JSX 
    return (
      <div className="App">
        <h1>To-do List</h1>
        <div className="add-task">
          <input
            type="text"
            placeholder="Enter a task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={addTask}>Add Task</button>
        </div>
        <div className="todo list">
        {tasks.map((task) => (
         <Task
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
        ))}
        To do list
        </div>
        
      </div>
    );
  };

export default Todo;