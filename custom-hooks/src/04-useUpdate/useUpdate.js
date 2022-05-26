import { useEffect, useRef } from 'react';

// Callback: function, dependencies: array
const useUpdateEffect = (callback, dependencies) => {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    return callback();
  }, dependencies);
};

export default useUpdateEffect;

//-> SOLUTION 2
/*
import { useEffect, useState } from 'react';

const useUpdateEffect = (callback, dependencies) => {
  const [firstRun, setFirstRun] = useState(true);
  
  useEffect(() => {
    if (firstRun) {
      return setFirstRun(!firstRun);
    }
    callback();
  }, dependencies);
};

export default useUpdateEffect;

*/
