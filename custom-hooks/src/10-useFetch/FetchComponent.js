import React, { useState } from 'react';

import useFetch from './useFetch';

const FetchComponent = () => {
  const [id, setId] = useState(1);
  const { loading, error, data } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {},
    [id]
  );

  console.log(data);

  return (
    <React.Fragment>
      <div>{id}</div>
      <button onClick={() => setId((currentId) => currentId + 1)}>
        Increment Id
      </button>
      <div>Loading: {loading.toString()}</div>
      <div>{JSON.stringify(error, null, 2)}</div>
      <div>{JSON.stringify(data, null, 2)}</div>
    </React.Fragment>
  );
};

export default FetchComponent;
