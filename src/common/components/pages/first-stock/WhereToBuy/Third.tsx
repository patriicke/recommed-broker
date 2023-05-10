/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Third = () => {
  return (
    <div className='mb-6'>
      <div>
        <div className='mb-4'>
          <div className='text-xs sm:text-sm text-secondary-500'>Step 3</div>
          <div className='text-base sm:text-lg font-semibold mt-2'>
            What stock to trade
          </div>
        </div>
        <div className='flex flex-col lg:flex-row w-full'>
          <div className='w-full lg:w-2/3 mb-4 lg:mb-0 text-sm sm:text-base'>
            <div>
              <span>
                We can't and do not intend to give advice on what to trade; you
                should always do your own research or seek investment advice. In
                any case, it may be a good idea to make your first trade with a
                small amount only, so that this will be the maximum you can lose
                - a small price for starting your journey. For ideas, you can
                check the{" "}
                <a
                  target='_blank'
                  href='https://finance.yahoo.com/most-active/'
                  className='underline'
                  rel='noreferrer'
                >
                  most actively traded stocks
                </a>
                , for example.
              </span>
            </div>
          </div>
          <div className='w-full lg:w-1/3 flex flex-col items-center'>
            <div id='FXTM-widget' />
          </div>
        </div>
        <div className='mt-4 sm:mt-6'>
          <div className='flex flex-col sm:flex-row justify-center items-center w-full bg-secondary-50 p-3 pr-4'>
            <div className='flex flex-col items-center'>
              <div
                className='w-14 h-14 bg-contain bg-center bg-no-repeat'
                style={{
                  backgroundImage:
                    'url("/images/my-first-stock-trade-quest/francis_profile.png")'
                }}
              />
              <div className='font-semibold text-center text-sm mt-2'>FRANCIS</div>
            </div>
            <div className='w-full mt-4 sm:mt-0 sm:ml-6 italic text-sm sm:text-base'>
              <div>
                <span>
                  Later on, you should consider building a portfolio of many
                  different stocks - you know, that old saying about not putting
                  all your eggs in one basket. A great way to reduce your risk!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
