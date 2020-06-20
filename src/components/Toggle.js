import React from 'react';
import { useToggle } from 'hooks';

const Toggle = () => {
  const { isToggle, toggle } = useToggle(false);

  return (
    <div>
      <h3>Toggle</h3>
      <button onClick={toggle}>Toggle</button>
      {isToggle && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio numquam
          animi rem repellat iusto suscipit eos quas earum, deleniti, saepe
          perferendis modi quisquam? Error non voluptatem fugit minus
          praesentium reiciendis!
        </p>
      )}
    </div>
  );
};

export default Toggle;
