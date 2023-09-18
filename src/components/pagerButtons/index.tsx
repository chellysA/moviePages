import React, { ReactNode } from 'react';

interface IPagerButtonsProps {
  content: number | ReactNode;
  bg?: string;
  onClick?: any;
}

const PagerButtons = ({
  content,
  bg = 'bg-gray-10',
  onClick,
}: IPagerButtonsProps) => {
  return (
    <>
      <button
        className={`${bg} text-gray-100 w-[40px] h-[40px] rounded-md mr-1`}
        onClick={onClick}
      >
        {content}
      </button>
    </>
  );
};
export default PagerButtons;
