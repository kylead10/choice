import { useState } from 'react';
import { BiToggleLeft, BiToggleRight } from 'react-icons/bi';
import '../index.css'; // Make sure this path is correct

const ToggleChoices = () => {
  const [choices, setChoices] = useState({
    good: false,
    cheap: false,
    fast: false,
  });

  const toggleChoice = (choice) => {
    // Count the number of active choices
    const activeChoicesCount = Object.values(choices).filter(Boolean).length;

    // Allow toggling only if less than or equal to two choices are active
    if (choices[choice] || activeChoicesCount < 2) {
      setChoices((prevChoices) => ({
        ...prevChoices,
        [choice]: !prevChoices[choice],
      }));
    }
  };

  return (
    <div>
      <h2>Select your job completion options:</h2>
      <div className='toggle-buttons'>
        <div
          className={`toggle-button ${choices.good ? 'active' : ''}`}
          onClick={() => toggleChoice('good')}
        >
          {choices.good ? (
            <BiToggleRight className='toggle-icon' />
          ) : (
            <BiToggleLeft className='toggle-icon' />
          )}
          <span>Good</span>
        </div>
        <div
          className={`toggle-button ${choices.cheap ? 'active' : ''}`}
          onClick={() => toggleChoice('cheap')}
        >
          {choices.cheap ? (
            <BiToggleRight className='toggle-icon' />
          ) : (
            <BiToggleLeft className='toggle-icon' />
          )}
          <span>Cheap</span>
        </div>
        <div
          className={`toggle-button ${choices.fast ? 'active' : ''}`}
          onClick={() => toggleChoice('fast')}
        >
          {choices.fast ? (
            <BiToggleRight className='toggle-icon' />
          ) : (
            <BiToggleLeft className='toggle-icon' />
          )}
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
