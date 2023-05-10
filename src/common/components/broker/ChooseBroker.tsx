/* eslint-disable react/no-unescaped-entities */
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import Image from "next/image";
const ChooseBroker: NextPage = () => {
  return (
    <div className='w-[950px] mx-auto flex justify-between py-10 gap-3'>
      <div className='flex justify-center flex-col gap-5 w-3/6'>
        <h1 className='font-extrabold w-4/5 text-[2em]'>
          Choose the best Nigerian Broker
        </h1>
        <p>
          Save hours of dull research by answering a few simple questions. Find
          the right broker in seconds!
        </p>
        <p>Let's start with selecting the country you live in!</p>
        <button className='flex font-semibold border w-fit p-2 rounded-md text-sm border-gray-300 text-orange-500'>
          Nigeria only
        </button>
        <button className='text-white bg-orange-400 w-fit p-3 rounded-md text-sm px-5 font-semibold flex items-center justify-center gap-2 shadow-md'>
          <span className='text-[13px]'>FIND MY BROKER</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <Image
        src={"/assets/touch_screen.png"}
        alt='Touch Screen'
        width={"450"}
        height={"450"}
      />
    </div>
  );
};

export default ChooseBroker;
