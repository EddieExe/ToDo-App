import React, { useState } from "react";

const TaskItem = ({ task, markAsCompleted, markAsIncomplete, editTask, deleteTask, isCompletedSection }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(task.name);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleSave = () => {
    editTask(task.id, newName, newDescription);
    setIsEditing(false);
  };

  return (
    <li className="task-item">
      {isEditing ? (
        <div>
          <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
          <input type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{task.name}</h3>
          <p>{task.description}</p>

          {/* Conditionally render "Mark as Completed" or "Mark as Incomplete" */}
          {!isCompletedSection ? (
            <button onClick={() => markAsCompleted(task.id)}>Mark as Completed</button>
          ) : (
            <button onClick={() => markAsIncomplete(task.id)}>Mark as Incomplete</button>
          )}

          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      )}
    </li>
  );
};

export default TaskItem;