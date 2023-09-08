import React from 'react';
import PagerButtons from '../pagerButtons';
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { FiMoreHorizontal } from 'react-icons/fi';

interface IPagerProps {
  totalPages: number;
  actualPages: number;
}

const Pager = ({ totalPages, actualPages }: IPagerProps) => {
  return (
    <div className="container flex justify-center">
      <PagerButtons
        content={
          <MdKeyboardDoubleArrowLeft className="w-[30px] h-[30px] ml-1" />
        }
        bg="bg-principal-200"
      />
      <PagerButtons content={actualPages} bg="bg-principal-200" />
      <PagerButtons content={actualPages + 1} />
      <PagerButtons content={actualPages + 2} />
      <PagerButtons content={actualPages + 3} />
      <PagerButtons content={actualPages + 4} />
      <PagerButtons
        content={<FiMoreHorizontal className="w-[20px] h-[20px] ml-3" />}
      />
      <PagerButtons content={totalPages} />
      <PagerButtons
        content={
          <MdKeyboardDoubleArrowRight className="w-[30px] h-[30px] ml-1" />
        }
        bg="bg-principal-200"
      />
    </div>
  );
};

export default Pager;
