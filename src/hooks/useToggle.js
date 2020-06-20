import { useState } from 'react';

export const useToggle = (initial) => {
  const [isToggle, setIsToggle] = useState(initial);
  const toggle = () => setIsToggle((prevState) => !prevState);

  return { isToggle, toggle };
};
