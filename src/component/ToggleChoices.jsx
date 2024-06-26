import { useState } from 'react';
import { BiToggleLeft, BiToggleRight } from 'react-icons/bi';
import '../index.css';

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

  // Define conditional logic based on selected choices
  let conditionalMessage = '';
  if (choices.good && choices.cheap && choices.fast) {
    conditionalMessage =
      'You can only choose two options at a time. Please deselect one.';
  } else if (choices.good && choices.cheap) {
    conditionalMessage =
      'This prioritizes quality and affordability, but may result in slower completion.';
  } else if (choices.good && choices.fast) {
    conditionalMessage =
      'This prioritizes quality and speed, but may come at a higher cost.';
  } else if (choices.cheap && choices.fast) {
    conditionalMessage =
      'This prioritizes affordability and speed, but may sacrifice quality.';
  }

  return (
    <div>
      <h2>Select your job completion options: you have only two choices</h2>
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
      <div className='cM'>{conditionalMessage}</div>
    </div>
  );
};

export default ToggleChoices;
