import { NextPage } from "next";
import React from "react";
import { calculateScore } from "../../../utils";

const Score: NextPage<{ score: number | string; className?: string }> = ({
  score,
  className
}) => {
  return (
    <div
      className={`h-16 max-h-16 flex flex-row items-start justify-center ${className}`}
    >
      <div className='flex items-center'>
        <div className='relative border border-black rounded-full flex overflow-hidden w-[90px] sm:w-[125px] h-[7px] sm:h-[10px]'>
          <div className='h-full border-r border-black last:border-r-0 z-20 w-[25px] sm:w-[25px]' />
          <div className='h-full border-r border-black last:border-r-0 z-20 w-[25px] sm:w-[25px]' />
          <div className='h-full border-r border-black last:border-r-0 z-20 w-[25px] sm:w-[25px]' />
          <div className='h-full border-r border-black last:border-r-0 z-20 w-[25px] sm:w-[25px]' />
          <div
            className={`absolute h-full z-10 ${
              score < 3
                ? "bg-red-500"
                : score > 3 && score < 4
                ? "bg-yellow-500"
                : "bg-success-500"
            }`}
            style={{ width: calculateScore(score) }}
          />
        </div>
        <div className='font-bold text-xs ml-1.5 sm:text-sm sm:ml-2 opacity-70'>
          {score.toString().length === 1 ? `${score}.0` : score}
        </div>
      </div>
    </div>
  );
};

export default Score;
