/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Third = () => {
  return (
    <div>
      <div className='mb-4'>
        <div className='text-xs sm:text-sm text-secondary-500'>Step 3</div>
        <div className='text-base sm:text-lg font-semibold mt-2'>
          Investing experience and financial knowledge
        </div>
      </div>
      <div className='flex flex-col justify-between'>
        <div className=' w-full mb-4 md:mb-0  md:w-8/12 md:ml-2'>
          <div className='text-sm sm:text-base'>
            <div>
              <span>
                Next you will get questions about your{" "}
                <span className='font-semibold'>investing experience</span> and{" "}
                <span className='font-semibold'>financial knowledge</span>.
              </span>
              <br />
              <br />
              <span>
                These questions are about the frequency of your earlier
                investments. Just{" "}
                <span className='font-semibold'>choose “never”</span> if you are
                an absolute beginner.{" "}
              </span>
              <br />
              <br />
              <span>
                After a few introductory questions, you will be asked to fill
                out a trading knowledge assessment.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
