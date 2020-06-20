import React from 'react';
import { useAppContext } from '../state';
import { useScrollFreeze } from 'hooks';

const NavWrapper = () => {
  const { isMenuOpen } = useAppContext();

  if (!isMenuOpen) return null;
  return <Nav />;
};

const Nav = () => {
  const { toggleMenu } = useAppContext();
  useScrollFreeze();

  return (
    <nav
      style={{
        background: 'var(--black)',
        color: 'white',
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        left: 0,
        right: 0,
      }}
    >
      <h4>Nav</h4>
      <button onClick={toggleMenu}>close</button>
    </nav>
  );
};

export default NavWrapper;
