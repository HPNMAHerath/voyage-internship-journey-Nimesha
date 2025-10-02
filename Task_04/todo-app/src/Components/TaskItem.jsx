import { useState } from 'react';

const TaskItem = ({ task, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task.text);

  const handleSave = () => {
    if (editValue.trim()) {
      onEdit(task.id, editValue.trim());
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditValue(task.text);
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  if (isEditing) {
    return (
      <div className={`task-item ${task.completed ? 'completed' : ''}`}>
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyPress={handleKeyPress}
          className="edit-input"
          autoFocus
        />
        <div className="edit-actions">
          <button className="save-btn" onClick={handleSave}>
            Save
          </button>
          <button className="cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div
        className={`task-checkbox ${task.completed ? 'checked' : ''}`}
        onClick={() => onToggle(task.id)}
      />
      <span className="task-text">{task.text}</span>
      <div className="task-actions">
        <button className="edit-btn" onClick={() => setIsEditing(true)}>
          Edit
        </button>
        <button className="delete-btn" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;