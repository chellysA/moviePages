import React from 'react';
import logo from '../../assets/logo.png';
import { FaLinkedin } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

interface IStatLink {
  link: string;
  label: string;
}
const StatLink = ({ link, label }: IStatLink) => {
  return (
    <NavLink to={link} className="no-underline text-white px-3 ">
      <li className="text-sm hover:text-principal-200 w-max list-none">
        {label}
      </li>
    </NavLink>
  );
};

const Footer = () => {
  return (
    <>
      <div className="w-full h-[300px] flex p-4">
        <div className="w-2/4 mr-14">
          <img src={logo} alt="" className="w-[100px] h-[40px] my-4"></img>
          <p>
            FMovies is the best free streaming site 2023, where you can watch
            movies online for free, no registration required. With a large
            database and great features, we're confident that FMovies is the
            best free online movie site in the space you just can't miss!
            <hr></hr>
            This page is building as a practice for me to learn axios.
          </p>
          <div className="flex">
            <FaLinkedin className="w-[20px] h-[20px] text-white mr-2" />
            <a
              href="https://www.linkedin.com/in/chellys-castillo"
              className="no-underline text-[15px] text-gray-200 hover:text-principal-200"
            >
              Connect with me on Linkdlin
            </a>
          </div>
        </div>
        <div className="ml-14">
          <p className="text-white font-bold mt-4">Links</p>
          <StatLink link="/movies" label="Movies" />
          <StatLink link="/tv-shows" label="Tv Shows" />
          <StatLink link="/most-watched" label="Most Watched" />
        </div>
      </div>
      <div className="flex"></div>
    </>
  );
};

export default Footer;
