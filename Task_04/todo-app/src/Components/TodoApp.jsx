import { useState } from 'react';
import Stats from './Stats';
import FilterSection from './FilterSection';
import TaskInput from './TaskInput';
import TasksList from './TasksList';
import './TodoApp.css';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all'); // Explicitly set to 'all'

  // Add new task
  const addTask = (text) => {
    const newTask = {
      id: Date.now() + Math.random(),
      text: text,
      completed: false,
      createdAt: new Date()
    };
    setTasks(prevTasks => [newTask, ...prevTasks]);
  };

  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  // Edit task
  const editTask = (id, newText) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  // Handle filter change
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="todo-app">
      <div className="container">
        <div className="header">
          <h1>✨ My Tasks</h1>
          <Stats tasks={tasks} />
        </div>

        <div className="input-section">
          <TaskInput onAddTask={addTask} />
          <FilterSection 
            currentFilter={filter} 
            onFilterChange={handleFilterChange} 
          />
        </div>

        <div className="tasks-section">
          <TasksList
            tasks={tasks}
            filter={filter}
            onToggle={toggleTask}
            onDelete={deleteTask}
            onEdit={editTask}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;