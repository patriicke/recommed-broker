/* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next";
import FellLostComponent from "./FellLostComponent";
const FellLost: NextPage = () => {
  return (
    <div className='w-full bg-blue-50 py-10'>
      <div className='w-[950px] mx-auto flex flex-col gap-8'>
        <div className='w-full flex items-center justify-center flex-col text-3xl'>
          <h1 className='font-bold w-full text-center'>
            Start here if you still feel lost
          </h1>
        </div>
        <div className='flex gap-3'>
          <FellLostComponent />
          <FellLostComponent />
          <FellLostComponent />
        </div>
      </div>
    </div>
  );
};

export default FellLost;
