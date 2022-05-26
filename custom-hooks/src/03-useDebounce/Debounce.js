import React, { useState } from 'react';
import useDebounce from './useDebounce';

export default function Debounce() {
  const [count, setCount] = useState(10);

  useDebounce(() => alert(count), 2000, [count]);

  return (
    <React.Fragment>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </React.Fragment>
  );
}
