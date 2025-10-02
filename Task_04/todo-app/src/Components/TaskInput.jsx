import { useState } from 'react';

const TaskInput = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    if (inputValue.trim()) {
      onAddTask(inputValue.trim());
      setInputValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Add a new task..."
        maxLength="200"
        className="task-input"
      />
      <button onClick={handleSubmit} className="add-btn">
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;