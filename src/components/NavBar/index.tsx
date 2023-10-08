import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import { AiOutlineClose } from "react-icons/ai";
import SearchBar from "../SearchBar"; // Delete lo que no uses
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
}; // Volver esto un solo comoponente cporque los usa en el footer tambien y es practiamente los mismo

const NavBar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Colocar en una constant en la carpeta constants/routes.ts con la rutas de la applicacion
  /**
   const routes = {
    HOME: "/";
    MOVIES: "/movies"
   }
    
   */
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
              link="/tv_shows"
              label="TV Shows"
              onClick={() => setShowMenu(false)}
            />
            {/*   <StatLink
              link="/coming_soon"
              label="Comming Soon"
              onClick={() => setShowMenu(false)}
            />
            <StatLink
              link="/most_watched"
              label="Most Watched"
              onClick={() => setShowMenu(false)}
      />*/}
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
            <StatLink link="/tv_shows" label="TV Shows" />
            {/*    <StatLink link="/comming_soon" label="Comming Soon" />
            <StatLink link="/most_watched" label="Most Watched" />*/}
          </ul>
        </div>
        {/* <SearchBar />*/}
      </nav>
    </>
  );
};

export default NavBar;
