import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { FaSearch } from 'react-icons/fa';
import { TfiMenuAlt } from 'react-icons/tfi';
import { AiOutlineClose } from 'react-icons/ai';
interface IStatLink {
  link: string;
  label: string;
  onClick?: () => void;
}

const StatLink = ({ link, label, onClick }: IStatLink) => {
  return (
    <NavLink
      to={link}
      className="no-underline text-white px-3 "
      onClick={onClick}
    >
      <li className="text-sm hover:text-principal-200 w-max">{label}</li>
    </NavLink>
  );
};

const NavBar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div
        className={`${
          showMenu
            ? `fixed w-screen h-screen backdrop-blur-md m-0 left-0 top-0 z-2 transition-all duration-300 ease-in-out`
            : `absolute top-[-300px] left-[-300px] transition duration-300 ease-out}`
        }`}
      >
        <div className="bg-principal-200 w-2/4 h-full p-2">
          <div>
            <AiOutlineClose
              className="w-[30px] h-[30px] text-gray-50"
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>
          <ul>
            <StatLink
              link="/"
              label="Home"
              onClick={() => setShowMenu(false)}
            />
            <StatLink
              link="/movies"
              label="Movies"
              onClick={() => setShowMenu(false)}
            />
            <StatLink
              link="/tv-shows"
              label="TV Shows"
              onClick={() => setShowMenu(false)}
            />
            <StatLink
              link="/concerts"
              label="Concerts"
              onClick={() => setShowMenu(false)}
            />
            <StatLink
              link="/most-watched"
              label="Most Watched"
              onClick={() => setShowMenu(false)}
            />
          </ul>
        </div>
      </div>
      <nav className="w-full absolute top-0 z-1 flex items-center justify-between p-4">
        <div className="flex w-2/6">
          <div className="md:hidden p-2">
            <TfiMenuAlt
              className="w-[30px] h-[30px] text-gray-50"
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>
          <img src={logo} alt="" width={140} className="py-1" />
          <ul className="items-center m-0 p-0 md:flex hidden">
            <StatLink link="/" label="Home" />
            <StatLink link="/movies" label="Movies" />
            <StatLink link="/tv-shows" label="TV Shows" />
            <StatLink link="/concerts" label="Concerts" />
            <StatLink link="/most-watched" label="Most Watched" />
          </ul>
        </div>
        <div
          id="search-bar"
          className="flex w-[150px] lg:w-[300px] h-[44px] rounded-2xl backdrop-contrast-50 "
        >
          <div className="w-[55px] p-2 md:p-0 flex items-center justify-center">
            <FaSearch className="text-white align-middle" />
          </div>
          <input
            type="text"
            placeholder="Enter keywords..."
            className="border-none bg-transparent text-white text-[14px]"
          />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
