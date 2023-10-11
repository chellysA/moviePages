import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { TfiMenuAlt } from "react-icons/tfi";
import { AiOutlineClose } from "react-icons/ai";
import NavBarItem from "../NavBarItem";
import routes from "../../constants/Routes";

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
        <div className="bg-gray-10 w-2/4 h-full p-2">
          <div>
            <AiOutlineClose
              className="w-[30px] h-[30px] text-gray-50"
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>
          <ul>
            <NavBarItem
              link="/"
              label="Home"
              onClick={() => setShowMenu(false)}
            />
            <NavBarItem
              link="/movies"
              label="Movies"
              onClick={() => setShowMenu(false)}
            />
            <NavBarItem
              link="/tv_shows"
              label="TV Shows"
              onClick={() => setShowMenu(false)}
            />
            <NavBarItem
              link="/coming_soon"
              label="Comming Soon"
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
            <NavBarItem link={routes.HOME} label="Home" />
            <NavBarItem link={routes.MOVIES} label="Movies" />
            <NavBarItem link={routes.TV_SHOWS} label="TV Shows" />
             <NavBarItem link={routes.COMING_SOON} label="Coming Soon" />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
