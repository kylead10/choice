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
      <div className='toggle-buttons'>
        <div
          className={`toggle-button ${choices.good ? 'active' : ''}`}
          onClick={() => toggleChoice('good')}
        >
          {choices.good ? <BiToggleRight /> : <BiToggleLeft />}
          <span>Good</span>
        </div>
        <div
          className={`toggle-button ${choices.cheap ? 'active' : ''}`}
          onClick={() => toggleChoice('cheap')}
        >
          {choices.cheap ? <BiToggleRight /> : <BiToggleLeft />}
          <span>Cheap</span>
        </div>
        <div
          className={`toggle-button ${choices.fast ? 'active' : ''}`}
          onClick={() => toggleChoice('fast')}
        >
          {choices.fast ? <BiToggleRight /> : <BiToggleLeft />}
          <span>Fast</span>
        </div>
      </div>
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
