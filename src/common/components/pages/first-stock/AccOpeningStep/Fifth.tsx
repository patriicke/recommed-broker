/* eslint-disable @next/next/no-img-element */
import React from "react";

const Fifth = () => {
  return (
    <div>
      <div className='mb-4'>
        <div className='text-xs sm:text-sm text-secondary-500'>Step 5</div>
        <div className='text-base sm:text-lg font-semibold mt-2'>
          You just bought your first stock!
        </div>
      </div>
      <div className='flex flex-col justify-between'>
        <div className=' w-full mb-4 md:mb-0  md:w-8/12 md:ml-2'>
          <div className='text-sm sm:text-base'>
            <div className='mr-4 sm:mr-2'>
              <span>
                After that, your stock(s) will appear in your portfolio.
              </span>
              <br />
              <br />
              <span className='font-semibold'>👏 You did it! 👏</span>
              <br />
              <br />
              <span className='font-semibold'>
                Congratulations, you have just bought your first stock!
              </span>
              <br />
              <br />
              <span>
                This is a{" "}
                <span className='font-semibold'>great accomplishment</span> and
                demonstrates your growing knowledge and understanding of how you
                can take your financials in your own hands.{" "}
                <span className='font-semibold'>
                  Keep up the good work and smart decision making!
                </span>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fifth;
