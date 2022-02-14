import React, { useState } from 'react';

interface ToggleButtonProps {
  onToggle(newValue?: unknown): void;
  values: Array<unknown>;
}

const ToggleButton = ({ onToggle, values }) => {
  const [currentState, setCurrentState] = useState(0);
  const handleToggle = () => {
    setCurrentState((state) => (state === 0 ? 1 : 0));
  };
  const getPosition = () => {
    return currentState === 0 ? 'translate-x-0' : 'translate-x-[14px]';
  };
  return (
    <button
      onClick={handleToggle}
      className="bg-gray-400 h-6 w-10 rounded-xl box-border p-1 relative"
    >
      <div
        className={`absolute transition-transform rounded-full w-4 h-4 bg-white top-1/2 -translate-y-1/2 ${getPosition()}`}
      ></div>
    </button>
  );
};

export default ToggleButton;
