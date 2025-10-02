import TaskItem from './TaskItem';

const TasksList = ({ tasks, filter, onToggle, onDelete, onEdit }) => {
  const getFilteredTasks = () => {
    switch (filter) {
      case 'completed':
        return tasks.filter(task => task.completed);
      case 'pending':
        return tasks.filter(task => !task.completed);
      default:
        return tasks;
    }
  };

  const filteredTasks = getFilteredTasks();

  if (filteredTasks.length === 0) {
    return (
      <div className="empty-state show">
        <div className="empty-icon">📝</div>
        <h3>No tasks yet!</h3>
        <p>Add your first task above to get started.</p>
      </div>
    );
  }

  return (
    <div className="tasks-list">
      {filteredTasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TasksList;