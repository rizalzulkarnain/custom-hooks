import { useState } from 'react';

export const useInc = (initial = 0) => {
  const [value, setValue] = useState(initial);

  const inc = () => setValue((prevState) => prevState + 1);
  const dec = () => setValue((prevState) => prevState - 1);
  const reset = () => setValue(initial);

  return [value, { inc, dec, reset }];
};
