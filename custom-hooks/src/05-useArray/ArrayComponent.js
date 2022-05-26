import React from 'react';

import useArray from './useArray';

export default function ArrayComponent() {
  const { array, set, push, remove, filter, update, map, clear } = useArray([
    1, 2, 3, 4, 5, 6,
  ]);

  return (
    <React.Fragment>
      <div>{array.join(', ')}</div>
      <button onClick={() => push(7)}>Add 7</button>
      <button onClick={() => update(1, 9)}>Change Second Element to 9</button>
      <button onClick={() => remove(1)}>Remove Second Element</button>
      <button onClick={() => filter((n) => n < 4)}>
        Keep Numbers Less Than 4
      </button>
      <button onClick={() => map((n) => n * 4)}>Multiply by 4</button>
      <button onClick={() => set([1, 2])}>Set to 1,2</button>
      <button onClick={clear}>Clear</button>
    </React.Fragment>
  );
}
