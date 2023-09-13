import React from 'react';
import PagerButtons from '../pagerButtons';
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { FiMoreHorizontal } from 'react-icons/fi';

interface IPagerProps {
  totalPages: number;
  actualPages: number;
  onClick: (arg0: number | boolean) => void;
}

const Pager = ({ totalPages, actualPages, onClick }: IPagerProps) => {
  return (
    <>
      {actualPages <= totalPages && (
        <div className="container flex justify-center">
          <PagerButtons
            content={
              <MdKeyboardDoubleArrowLeft className="w-[30px] h-[30px] ml-1" />
            }
            bg="bg-principal-200"
            onClick={() => {
              onClick(actualPages > 1 ? actualPages - 1 : 1);
            }}
          />
          {actualPages > 4 && (
            <>
              <PagerButtons
                content={1}
                onClick={() => {
                  onClick(1);
                }}
              />{' '}
              <PagerButtons
                content={
                  <FiMoreHorizontal className="w-[20px] h-[20px] ml-3" />
                }
              />
            </>
          )}
          <PagerButtons
            content={actualPages}
            bg="bg-principal-200"
            onClick={() => {
              onClick(actualPages);
            }}
          />
          <PagerButtons
            content={actualPages + 1 > totalPages ? null : actualPages + 1}
            onClick={() => {
              onClick(actualPages + 1);
            }}
          />
          <PagerButtons
            content={actualPages + 2 > totalPages ? null : actualPages + 2}
            onClick={() => {
              onClick(actualPages + 2);
            }}
          />
          <PagerButtons
            content={actualPages + 3 > totalPages ? null : actualPages + 3}
            onClick={() => onClick(actualPages + 3)}
          />
          <PagerButtons
            content={actualPages + 4 > totalPages ? null : actualPages + 4}
            onClick={() => onClick(actualPages + 4)}
          />

          <PagerButtons
            content={<FiMoreHorizontal className="w-[20px] h-[20px] ml-3" />}
          />
          <PagerButtons
            content={totalPages}
            onClick={() => {
              onClick(totalPages);
            }}
          />
          <PagerButtons
            content={
              <MdKeyboardDoubleArrowRight className="w-[30px] h-[30px] ml-1" />
            }
            bg="bg-principal-200"
            onClick={() =>
              onClick(actualPages == totalPages ? totalPages : actualPages + 1)
            }
          />
        </div>
      )}
    </>
  );
};

export default Pager;
