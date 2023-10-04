import React, { ReactElement } from "react";

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
          bg && `bg-principal-200`
        } items-center py-1 text-principal-200 text-[74%] ${
          border && `border border-principal-200`
        } pl-3 pr-4 pt-1 rounded-full hover:opacity-50 z-1`}
      >
        {icon}
        {label}
      </button>
    </>
  );
};

export default Button;
