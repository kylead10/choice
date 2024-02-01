import React, { useState } from 'react';

const ToggleChoices = () => {
  const [choice, setChoice] = useState('Choice 1');

  const toggleChoice = () => {
    setChoice(choice === 'Choice 1' ? 'Choice 2' : 'Choice 1');
  };

  return (
    <div>
      <h2>Toggle between two choices:</h2>
      <button onClick={toggleChoice}>Toggle</button>
      <p>Current choice: {choice}</p>
    </div>
  );
};

export default ToggleChoices;
