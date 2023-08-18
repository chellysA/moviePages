import React from 'react';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <>
      <div className="w-full h-[300px] flex p-4">
        <img src={logo} alt="" className="w-[80px] h-[80px]"></img>
        <p></p>
      </div>
      <div className="flex"></div>
    </>
  );
};

export default Footer;
