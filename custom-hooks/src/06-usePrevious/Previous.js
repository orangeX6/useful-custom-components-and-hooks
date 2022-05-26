import React, { useState } from 'react';
import usePrevious from './usePrevious';

export default function Previous() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Orange');

  const previousCount = usePrevious(count);

  return (
    <React.Fragment>
      <div>
        {count} - {previousCount}
      </div>
      <div>{name}</div>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        Increment
      </button>
      <button
        onClick={() => {
          setName('Pranav');
        }}
      >
        Change Name
      </button>
    </React.Fragment>
  );
}
