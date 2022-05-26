import React, { useState } from 'react';

const useArray = (arr) => {
  const [array, setArray] = useState(arr);

  const push = (val) => {
    setArray([...array, val]);
  };

  const update = (index, value) => {
    setArray((arr) => [
      ...arr.slice(0, index),
      value,
      ...arr.slice(index + 1, arr.length),
    ]);
  };

  const remove = (index) => {
    setArray((arr) => [
      ...arr.slice(0, index),
      ...arr.slice(index + 1, arr.length),
    ]);
  };

  const filter = (callback) => {
    setArray((arr) => arr.filter(callback));
  };

  const map = (callback) => {
    setArray((arr) => arr.map(callback));
  };

  const clear = () => {
    setArray([]);
  };

  return { array, push, update, remove, filter, map, set: setArray, clear };
};

export default useArray;
