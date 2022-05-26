import React from 'react';

import useToggle from './useToggle';

const Toggle = () => {
  const [value, setToggleValue] = useToggle(true);

  return (
    <React.Fragment>
      Hi
      <h2>{value ? 'true' : 'false'}</h2>
      <div>
        <button onClick={setToggleValue}>Toggle</button>
        <button onClick={() => setToggleValue(true)}>Make True</button>
        <button onClick={() => setToggleValue(false)}>Make False</button>
      </div>
    </React.Fragment>
  );
};

export default Toggle;
