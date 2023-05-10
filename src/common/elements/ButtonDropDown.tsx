import { NextPage } from "next";
import { useContext } from "react";
import { CommonContext } from "../../context/CommonContext";
import { ICommonContext } from "../types";

export const DownArrow: NextPage<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M16.293 9.29297L12 13.586L7.707 9.29297L6.293 10.707L12 16.414L17.707 10.707L16.293 9.29297Z'
        fill='currentColor'
      />
    </svg>
  );
};

const ButtonDropDown: NextPage<{ text: string; dispNumber: number }> = ({
  text,
  dispNumber
}) => {
  const { setShowDrop } = useContext<ICommonContext>(CommonContext);
  return (
    <>
      <button
        className={`h-full w-full lg:w-auto lg:py-0 lg:m-0 lg:px-2 flex flex-wrap items-center cursor-pointer border-t border-gray-700 border-b-black lg:border-b-2 lg:border-t-0 font-medium select-none group lg:hover:text-yellow-color lg:hover:border-b-2 lg:hover:border-b-yellow-color lg:hidden`}
        onClick={() => setShowDrop(dispNumber)}
      >
        <span className='flex-1 text-left '>{text}</span>
        <DownArrow className='justify-self-end h-6 w-6 xl:h-6 xl:w-6 navbar-chevron transition rotate-0 lg:group-hover:rotate-[-180deg] delay-100 duration-100' />
      </button>
      <button
        className={`hidden h-full w-full lg:w-auto lg:py-0 lg:m-0 lg:px-2 lg:flex flex-wrap items-center cursor-pointer border-t border-gray-700 border-b-black lg:border-b-2 lg:border-t-0 font-medium select-none group lg:hover:text-yellow-color lg:hover:border-b-2 lg:hover:border-b-yellow-color `}
      >
        <span className='flex-1 text-left '>{text}</span>
        <DownArrow className='justify-self-end h-6 w-6 xl:h-6 xl:w-6 navbar-chevron transition rotate-0 lg:group-hover:rotate-[-180deg] delay-100 duration-100' />
      </button>
    </>
  );
};

export default ButtonDropDown;
