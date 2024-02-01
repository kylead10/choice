import { useState } from 'react';

const ToggleChoices = () => {
  const [choice, setChoice] = useState('Choice 1');

  const toggleChoice = () => {
    setChoice(choice === 'Choice 1' ? 'Choice 2' : 'Choice 1');
  };

  return (
    <div>
      <h2>Select your design options of choice:</h2>
      <button onClick={toggleChoice}>Good</button>
      <button onClick={toggleChoice}>Cheap</button>
      <button onClick={toggleChoice}>Toggle</button>
      <p>Current choice: {choice}</p>
    </div>
  );
};

export default ToggleChoices;
