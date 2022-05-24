import { useEffect, useReducer } from 'react';
import axios from 'axios';

const reducerFn = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: true, error: false };
    case 'DATA_FETCHED':
      // console.log(action);
      return {
        ...state,
        books: [...new Set([...state.books, ...action.payload.data])],
        hasMore: action.payload.length > 0,
        loading: false,
      };
    case 'ERROR':
      return { ...state, error: true };
    case 'RESET':
      // console.log(state);
      return initialState;
    default:
      return state;
  }
};

const initialState = {
  loading: true,
  error: false,
  books: [],
  hasMore: false,
};

export default function useBookSearch(query, pageNumber) {
  const [state, dispatch] = useReducer(reducerFn, initialState);

  const { loading, error, books, hasMore } = state;

  useEffect(() => {
    dispatch({ type: 'RESET' });
  }, [query]);

  useEffect(() => {
    dispatch({ type: 'LOADING' });
    let cancel;
    axios({
      method: 'GET',
      url: 'https://openlibrary.org/search.json',
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        dispatch({
          type: 'DATA_FETCHED',
          payload: {
            data: res.data.docs.map((b) => b.title),
            length: res.data.docs.length,
          },
        });
        // console.log(res.data);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        dispatch({ type: 'ERROR' });
      });

    return () => cancel();
  }, [query, pageNumber]);

  return { loading, error, books, hasMore };
}
