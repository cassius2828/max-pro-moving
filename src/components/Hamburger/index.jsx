/* eslint-disable react/prop-types */
import  { useState } from 'react';

export const Hamburger = ({isOpen,setIsOpen}) => {
 

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button onClick={handleClick} className="flex  flex-col justify-between items-center lg:hidden fixed z-30 top- right-5 h-6">
      <span
        className={`bg-gray-200 block transition-all duration-300 ease-out 
          h-0.5 w-12 rounded-sm ${isOpen ? 'rotate-45 translate-y-3' : '-translate-y-0.5'}`}
      ></span>
      <span
        className={`bg-gray-200 block transition-all duration-300 ease-out 
          h-0.5 w-12 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
      ></span>
      <span
        className={`bg-gray-200 block transition-all duration-300 ease-out 
          h-0.5 w-12 rounded-sm ${isOpen ? '-rotate-45 -translate-y-2.5' : 'translate-y-0.5'}`}
      ></span>
    </button>
  );
};
