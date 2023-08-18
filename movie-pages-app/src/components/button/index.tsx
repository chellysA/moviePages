import React, { ReactElement } from 'react';

interface IButtonProps {
  icon?: ReactElement;
  label: string;
  bg?: boolean;
  border?: boolean;
}

const Button = ({ icon, label, bg, border }: IButtonProps) => {
  return (
    <>
      <button
        className={`flex ${
          bg && `bg-white`
        }items-center text-principal-200 font-[15px] ${
          border && `border border-principal-100`
        } pl-2 pr-3 py-1 rounded-full`}
      >
        {icon}
        {label}
      </button>
    </>
  );
};

export default Button;
