import React from "react";

interface ISubtitleProps {
  label: string;
}

const Subtitle = ({ label }: ISubtitleProps) => {
  return (
    <>
      <h3 className="relative ml-2 mr-4  text-gray-100 before:absolute before:top-[40px] before:h-[1px] before:w-[50px] before:bg-gray-100">
        {label}
      </h3>
    </>
  );
};

export default Subtitle;
