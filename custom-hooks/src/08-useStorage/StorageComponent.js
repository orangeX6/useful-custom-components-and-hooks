import React, { useState } from 'react';
import { useSessionStorage, useLocalStorage } from './useStorage';

const StorageComponent = () => {
  // const [age, setAge] = useState(20);
  // const [name, setName] = useState('Orange');

  const [name, setName, removeName] = useSessionStorage('name', 'Orange');
  const [age, setAge, removeAge] = useLocalStorage('age', 26);

  return (
    <React.Fragment>
      <div>
        {name} - {age}
      </div>
      <button onClick={() => setName('Pranav')}>Set Name</button>
      <button onClick={() => setAge(69)}>Set Age</button>
      <button onClick={removeName}>Remove Name</button>
      <button onClick={removeAge}>Remove Age</button>
    </React.Fragment>
  );
};

export default StorageComponent;
