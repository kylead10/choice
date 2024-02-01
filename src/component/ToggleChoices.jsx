import { useState } from 'react';
import { BiToggleLeft, BiToggleRight } from 'react-icons/bi';

const ToggleChoices = () => {
  const [choices, setChoices] = useState({
    good: false,
    cheap: false,
    fast: false,
  });

  const toggleChoice = (choice) => {
    setChoices((prevChoices) => ({
      ...prevChoices,
      [choice]: !prevChoices[choice],
    }));
  };

  return (
    <div>
      <h2>Select your design options of choice:</h2>
      <button onClick={() => toggleChoice('good')}>
        {choices.good ? 'Good (On)' : 'Good (Off)'}
      </button>
      <button onClick={() => toggleChoice('cheap')}>
        {choices.cheap ? 'Cheap (On)' : 'Cheap (Off)'}
      </button>
      <button onClick={() => toggleChoice('fast')}>
        {choices.fast ? 'Fast (On)' : 'Fast (Off)'}
      </button>
      <p>
        Current choices:{' '}
        {Object.entries(choices)
          .filter(([, value]) => value)
          .map(([key]) => key)
          .join(', ') || 'None'}
      </p>
    </div>
  );
};

export default ToggleChoices;
