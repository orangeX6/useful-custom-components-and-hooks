import { useState } from 'react';
import { Fragment } from 'react';

import useTimeout from './useTimeout';

const Timeout = () => {
  const [count, setCount] = useState(10);
  const { clear, reset } = useTimeout(() => setCount(9), 1000);

  return (
    <Fragment>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={clear}>Clear Timeout</button>
      <button onClick={reset}>Reset Timeout</button>
    </Fragment>
  );
};

export default Timeout;
