import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";
import "./styles/styles.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  // Load tasks from localStorage when the app loads
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    const savedCompletedTasks = localStorage.getItem("completedTasks");
  
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
    if (savedCompletedTasks) {
      setCompletedTasks(JSON.parse(savedCompletedTasks));
    }
  }, []);  

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    if (completedTasks.length > 0) {
      localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
    }
  }, [tasks, completedTasks]);  

  // Add a new task
  const addTask = (taskName, taskDescription) => {
    const newTask = { id: Date.now(), name: taskName, description: taskDescription };
    setTasks([newTask, ...tasks]); // New tasks appear at the top
  };

  // Mark a task as completed
  const markAsCompleted = (id) => {
    const taskToComplete = tasks.find(task => task.id === id);
    if (taskToComplete) {
      setCompletedTasks([taskToComplete, ...completedTasks]);
      setTasks(tasks.filter(task => task.id !== id));
    }
  };

  const markAsIncomplete = (id) => {
    const taskToMoveBack = completedTasks.find(task => task.id === id);
    if (taskToMoveBack) {
      setTasks([taskToMoveBack, ...tasks]);
      setCompletedTasks(completedTasks.filter(task => task.id !== id));
    }
  };

  // Delete a task from either list
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
    setCompletedTasks(completedTasks.filter(task => task.id !== id));
  };

  // Edit an existing task
  const editTask = (id, newName, newDescription) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, name: newName, description: newDescription } : task));
    setCompletedTasks(completedTasks.map(task => task.id === id ? { ...task, name: newName, description: newDescription } : task));
  };

  return (
    <div className="app-container">
      <div className="left-panel">
        <Header />
        <TaskInput addTask={addTask} />
      </div>

      <div className="right-panel">
        <div className="task-buttons">
          <button onClick={() => setShowCompleted(false)} className={!showCompleted ? "active" : ""}>
            Current Tasks
          </button>
          <button onClick={() => setShowCompleted(true)} className={showCompleted ? "active" : ""}>
            Completed Tasks
          </button>
        </div>

        <div className="task-list">
          {!showCompleted ? (
            tasks.length > 0 ? tasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                markAsCompleted={markAsCompleted}
                markAsIncomplete={markAsIncomplete}
                deleteTask={deleteTask}
                editTask={editTask}
                isCompletedSection={false} // Not completed section
              />
            )) : <p>No current tasks.</p>
          ) : (
            completedTasks.length > 0 ? completedTasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                markAsCompleted={markAsCompleted}
                markAsIncomplete={markAsIncomplete} 
                deleteTask={deleteTask}
                editTask={editTask}
                isCompletedSection={true} // Completed section
              />
            )) : <p>No completed tasks.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;