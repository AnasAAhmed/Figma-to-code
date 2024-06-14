import { useState } from 'react';

const DropDown = ({options,heading,setDropValues}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <div
        // type="button"
        className="dropdown-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {heading}<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
      </div>

      {isOpen && (
        
        <div className="dropdown-menu" onMouseLeave={()=>setIsOpen(false)}>
          {options.map((option, index) => (
            <div
              key={index}
              className="dropdown-item"
              onClick={() => setDropValues(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
