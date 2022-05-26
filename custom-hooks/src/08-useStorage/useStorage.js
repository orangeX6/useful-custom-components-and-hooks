import React, { useCallback, useState, useEffect } from 'react';

// window.localStorage || window.sessionStorage
const useStorage = (key, defaultValue, storageObject) => {
  const [value, setValue] = useState(() => {
    const jsonValue = storageObject.getItem(key);
    if (jsonValue !== null) return JSON.parse(jsonValue);

    if (typeof defaultValue === 'function') return defaultValue();
    return defaultValue;
  });

  useEffect(() => {
    if (value === undefined) return storageObject.removeItem(key);
    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove];
};

export const useSessionStorage = (key, defaultValue) => {
  return useStorage(key, defaultValue, window.sessionStorage);
};

export const useLocalStorage = (key, defaultValue) => {
  return useStorage(key, defaultValue, window.localStorage);
};
