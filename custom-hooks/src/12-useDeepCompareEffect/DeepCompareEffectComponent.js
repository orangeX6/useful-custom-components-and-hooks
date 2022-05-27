import React, { useEffect, useState, useRef, useMemo } from 'react';
import { useDeepCompareEffect } from './useDeepCompareEffect';

const DeepCompareEffectComponent = () => {
  const [age, setAge] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  const useEffectCountRef = useRef();
  const useDeepCompareEffectCountRef = useRef();

  // const person = useMemo(() => ({ age: age, name: 'Orange' }), [age]);
  const person = { age: age, name: 'Orange' };

  useEffect(() => {
    useEffectCountRef.current.textContent =
      parseInt(useEffectCountRef.current.textContent) + 1;
  }, [person]);

  useDeepCompareEffect(() => {
    console.log('rerender');
    useDeepCompareEffectCountRef.current.textContent =
      parseInt(useDeepCompareEffectCountRef.current.textContent) + 1;
  }, [person]);

  return (
    <React.Fragment>
      <div>
        useEffect: <span ref={useEffectCountRef}>0</span>
      </div>
      <div>
        useDeepCompareEffect: <span ref={useDeepCompareEffectCountRef}>0</span>
      </div>
      <div>Other Count: {otherCount}</div>
      <button onClick={() => setAge((age) => age + 1)}>Increment Age</button>
      <button onClick={() => setOtherCount((otherCount) => otherCount + 1)}>
        Increment Other Count
      </button>
    </React.Fragment>
  );
};

export default DeepCompareEffectComponent;
