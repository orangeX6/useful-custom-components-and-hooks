import { Fragment } from 'react';

import useAsync from './useAsync';

const AsyncComponent = () => {
  const { error, loading, data } = useAsync(() => {
    return new Promise(async (resolve, reject) => {
      const success = true;
      setTimeout(() => {
        success ? resolve('Hi') : reject('Error');
      }, 1000);
    });
  });

  return (
    <Fragment>
      <div>Loading: {loading.toString()}</div>
      <div>{error}</div>
      <div>{data}</div>
    </Fragment>
  );
};

export default AsyncComponent;
