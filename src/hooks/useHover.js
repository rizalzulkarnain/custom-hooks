import { useState, useMemo } from 'react';

export const useHover = (initial = false) => {
  const [isHovered, setIsHovered] = useState(initial);

  const bind = useMemo(() => {
    return {
      onMouseOver: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
    };
  }, []);

  return [isHovered, bind];
};
