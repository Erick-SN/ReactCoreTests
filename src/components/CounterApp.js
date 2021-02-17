import PropTypes from 'prop-types';
import { useState } from 'react';
const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
  };
  const handleSubstract = () => {
    setCounter(counter - 1);
  };
  const handleReset = () => {
    setCounter(value);
  };

  return (
    <>
      <div className="counter">
        <h1>CounterApp</h1>
        <h2>{counter}</h2>
        <button onClick={handleAdd}> +1 </button>
        <button onClick={handleSubstract}> -1 </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;
