/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Fourth = () => {
  return (
    <div>
      <div className='mb-4'>
        <div className='text-xs sm:text-sm text-secondary-500'>Step 4</div>
        <div className='text-base sm:text-lg font-semibold mt-2'>
          How to buy the chosen stock
        </div>
      </div>
      <div className='flex flex-col justify-between'>
        <div className=' w-full mb-4 md:mb-0  md:w-8/12 md:ml-2'>
          <div className='text-sm sm:text-base'>
            <div>
              <span>
                At this stage, you can check all{" "}
                <span className='font-semibold'>
                  the information about the chosen stock
                </span>
                . You can see an overview and also check stats and charts.
              </span>
              <br />
              <br />
              <span>
                In case you have decided{" "}
                <span className='font-semibold'>to buy the stock</span>, you
                need to tap the{" "}
                <span className='font-semibold'>green 'Invest' button</span> in
                the bottom right corner.
              </span>
              <br />
              <br />
              <span>
                Before you can buy the stock, you have to fill out a W-8BEN
                Form. We will show you what that is in the next step.
              </span>
            </div>
          </div>
          <div className='hidden md:block' />
        </div>
        <div className='flex justify-center items-center mr-3 w-full md:max-w-[260px]'>
          <img
            alt=''
            src='/images/my-first-stock-trade-quest/mfstq_illustration_3_11.png'
            className='w-full md:max-w-[260px]'
          />
        </div>
      </div>
      <div className='md:hidden block' />
    </div>
  );
};

export default Fourth;
