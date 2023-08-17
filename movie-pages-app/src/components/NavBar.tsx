import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaSearch } from 'react-icons/fa';
interface IStatLink {
  link: string;
  label: string;
}

const StatLink = ({ link, label }: IStatLink) => {
  return (
    <NavLink to={link} className="no-underline text-white px-4">
      <li className="text-sm hover:text-blue-100">{label}</li>
    </NavLink>
  );
};

const NavBar: React.FC = () => {
  return (
    <nav className="w-full bg-transparent flex items-center justify-between px-4 ">
      <div className="flex w-2/6">
        <img src={logo} alt="" width={110} />
        <ul className="flex items-center  w-2/6 justify-between m-0">
          <StatLink link="/" label="Home" />
          <StatLink link="/movies" label="Movies" />
          <StatLink link="/series" label="Series" />
          <StatLink link="/concerts" label="Concerts" />
        </ul>
      </div>

      <div className="flex w-[300px] h-[44px] rounded-2xl backdrop-contrast-50 ">
        <div className="w-[55px] flex items-center justify-center">
          <FaSearch className="text-white align-middle" />
        </div>
        <input
          type="text"
          placeholder="Enter keywords..."
          className="border-none bg-transparent text-white "
        />
      </div>
    </nav>
  );
};

export default NavBar;
