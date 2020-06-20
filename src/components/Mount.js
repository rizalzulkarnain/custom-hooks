import React from 'react';
import { useMount, useUnmount, useToggle } from 'hooks';

const Mount = () => {
  const { isToggle, toggle } = useToggle();

  return (
    <div>
      <h4>Mount/Unmount</h4>
      <button onClick={toggle}>Toggle</button>
      {isToggle && <Unmount />}
    </div>
  );
};

export const Unmount = () => {
  useMount(() => {
    console.log('Mounted');
  });

  useUnmount(() => {
    console.log('unmounted');
  });

  return (
    <div>
      <h4>Unmount Me</h4>
    </div>
  );
};

export default Mount;
