import React, { ReactNode } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

interface IModalProps {
  onClose: () => void;
  isOpen: boolean;
  children?: ReactNode;
  showCloseIcon?: boolean;
}
const Modal = ({ onClose, isOpen, children, showCloseIcon }: IModalProps) => {
  const stopPropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };
  return (
    <>
      {isOpen && (
        <div
          className="fixed z-50 top-0 flex h-screen w-screen items-center justify-center bg-black/30 backdrop-blur-none"
          onClick={onClose}
        >
          <div
            className="relative h-max w-max rounded-[10px] bg-white"
            onClick={stopPropagation}
          >
            {showCloseIcon && (
              <AiOutlineClose
                onClick={onClose}
                className="absolute right-9 h-6 w-6 text-gray-600"
              />
            )}
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
