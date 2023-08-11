import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
