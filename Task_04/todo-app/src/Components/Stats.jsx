const Stats = ({ tasks }) => {
  const total = tasks.length;
  const completed = tasks.filter(task => task.completed).length;
  const pending = total - completed;

  return (
    <div className="stats">
      <div className="stat-item">
        <span className="stat-number">{total}</span>
        <span>Total</span>
      </div>
      <div className="stat-item">
        <span className="stat-number">{completed}</span>
        <span>Completed</span>
      </div>
      <div className="stat-item">
        <span className="stat-number">{pending}</span>
        <span>Pending</span>
      </div>
    </div>
  );
};

export default Stats;