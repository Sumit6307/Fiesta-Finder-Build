const SortDropdown = ({ id, options, onSelect }) => {
    return (
      <select
        id={id}
        className="border rounded-lg p-2"
        onChange={(e) => onSelect(e.target.value)}  // Call onSelect with the selected option
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  };
  
  export default SortDropdown;
  