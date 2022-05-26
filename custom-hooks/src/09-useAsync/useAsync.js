import { useCallback, useEffect, useReducer } from 'react';

const reducerFn = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return { ...initialState };
    case 'DATA_FETCHED':
      return { ...initialState, data: action.payload };
    case 'ERROR':
      return { ...initialState, error: action.payload };
    case 'COMPLETED':
      return { ...state, loading: false };
    default:
      return { ...initialState };
  }
};

const initialState = {
  loading: true,
  data: null,
  error: null,
};

const useAsync = (callbackFunction, dependencies = []) => {
  const [state, dispatch] = useReducer(reducerFn, initialState);

  const { loading, data, error } = state;

  const memoizedFunction = useCallback(() => {
    dispatch({ type: 'LOADING' });
    callbackFunction()
      .then((json) => dispatch({ type: 'DATA_FETCHED', payload: json }))
      .catch((error) => dispatch({ type: 'ERROR', payload: error }))
      .finally(() => dispatch({ type: 'COMPLETED' }));
  }, dependencies);

  useEffect(() => {
    memoizedFunction();
  }, [memoizedFunction]);

  return { loading, error, data };
};

export default useAsync;
