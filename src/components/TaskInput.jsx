import React, { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleAddTask = () => {
    if (taskName.trim() && taskDescription.trim()) {
      addTask(taskName, taskDescription);
      setTaskName("");
      setTaskDescription("");
    }
  };

  return (
    <div className="task-input">
      <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} placeholder="Task name" />
      <input type="text" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} placeholder="Task description" />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;