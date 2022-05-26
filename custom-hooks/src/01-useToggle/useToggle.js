import { useState } from 'react';

const useToggle = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const setToggleValue = (value) => {
    setValue((prevValue) => (typeof value === 'boolean' ? value : !prevValue));
  };

  return [value, setToggleValue];
};

export default useToggle;
