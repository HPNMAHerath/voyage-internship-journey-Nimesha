const FilterSection = ({ currentFilter, onFilterChange }) => {
  const filters = [
    { key: 'all', label: 'All' },
    { key: 'pending', label: 'Pending' },
    { key: 'completed', label: 'Completed' }
  ];

  return (
    <div className="filter-section">
      {filters.map(filter => (
        <button
          key={filter.key}
          className={`filter-btn ${currentFilter === filter.key ? 'active' : ''}`}
          onClick={() => onFilterChange(filter.key)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default FilterSection;