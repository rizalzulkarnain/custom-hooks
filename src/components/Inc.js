import React from 'react';
import { useInc } from 'hooks';

const Inc = () => {
  const [value, { dec, inc, reset }] = useInc();

  return (
    <div>
      <h3>Increment/Decrement</h3>
      <button onClick={dec}>-</button>
      {value}
      <button onClick={inc}>+</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Inc;
