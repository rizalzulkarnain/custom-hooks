import React, { createContext, useContext } from 'react';
import { useToggle } from '../hooks';

export const AppContext = createContext({
  isMenuOpen: false,
});

export const PageWrapper = ({ children }) => {
  const { isToggle, toggle } = useToggle(false);

  return (
    <AppContext.Provider
      value={{
        isMenuOpen: isToggle,
        toggleMenu: toggle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
