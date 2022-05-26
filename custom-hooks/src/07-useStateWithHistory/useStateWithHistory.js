import { useCallback, useState, useRef } from 'react';

export const useStateWithHistory = (defaultValue, { capacity = 10 } = {}) => {
  const [value, setValue] = useState(defaultValue);
  const historyRef = useRef([value]);
  const pointerRef = useRef(0);

  const set = useCallback(
    (val) => {
      const resolvedValue = typeof val === 'function' ? val(value) : val;

      // console.log(historyRef.current[pointerRef.current] !== resolvedValue);
      if (historyRef.current[pointerRef.current] !== resolvedValue) {
        if (pointerRef.current < historyRef.current.length - 1) {
          historyRef.current.splice(pointerRef.current + 1);
        }
        historyRef.current.push(resolvedValue);

        while (historyRef.current.length > capacity) {
          historyRef.current.shift();
        }

        pointerRef.current = historyRef.current.length - 1;
      }
      setValue(resolvedValue);
      // console.log(historyRef.current, pointerRef.current);
    },
    [value, capacity]
  );

  const back = useCallback(() => {
    if (pointerRef.current <= 0) return;
    pointerRef.current--;
    setValue(historyRef.current[pointerRef.current]);
    // console.log(pointerRef.current, historyRef.current);
  }, []);

  const forward = useCallback(() => {
    if (pointerRef.current >= historyRef.current.length - 1) return;
    pointerRef.current++;
    setValue(historyRef.current[pointerRef.current]);
  }, []);

  const go = useCallback((index) => {
    if (index < 0 || index >= historyRef.current.length - 1) return;
    pointerRef.current = index;
    setValue(historyRef.current[pointerRef.current]);
  }, []);

  return [
    value,
    set,
    {
      history: historyRef.current,
      pointer: pointerRef.current,
      back,
      forward,
      go,
    },
  ];
};
