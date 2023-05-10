/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";

const First = () => {
  return (
    <div>
      <div className='mb-4'>
        <div className='text-xs sm:text-sm text-secondary-500'>Step 1</div>
        <div className='text-base sm:text-lg font-semibold mt-2'>
          Registration with email address
        </div>
      </div>
      <div className='flex flex-col md:flex-row-reverse justify-between'>
        <div className=' w-full mb-4 md:mb-0  md:w-8/12 md:ml-8'>
          <div>
            <span>
              To start the registration process, visit the{" "}
              <span>
                <a
                  className='underline bc-link-no-decor'
                  href='https://www.forextime.com/login'
                  rel='noreferrer nofollow'
                  target='_blank'
                >
                  FXTM signup page
                </a>
              </span>{" "}
              in your browser.
            </span>
            <br />
            <br />
            <ol className='list-outside pl-5'>
              <li>
                Choose the account type that you want to open (e.g., Standard,
                Cent, ECN, etc.) and click "Register."
              </li>
              <li>
                Fill in your personal details, including your name, email
                address, and phone number.
              </li>
              <li>
                Choose a strong password and fill in your password confirmation.
              </li>
              <li>Read and accept the terms and conditions.</li>
              <li> Click on "Register" to submit your application.</li>
            </ol>
            <br />
            <span className='font-semibold'>
              Once your account is approved, you can start trading by following
              these steps:
            </span>
            <br />
            <br />
            <span>
              Log in to your FXTM account using your registered email address
              and password. Click on the "Deposit" button and choose your
              preferred payment method to fund your account. Once your account
              is funded, select the trading platform you want to use (e.g., MT4,
              MT5, etc.). Choose the currency pair you want to trade and click
              "New Order." Enter the amount you want to trade and set your stop
              loss and take profit levels. Click on "Buy" or "Sell" to execute
              your trade.
            </span>
          </div>
          <div className='hidden md:block'>
            <div className='mt-8'>
              <div className='flex flex-col sm:flex-row justify-center items-center w-full bg-secondary-50 p-3 pr-4'>
                <div className='w-full mt-4 sm:mt-0 sm:ml-6 italic text-sm sm:text-base text-slate-600'>
                  <div>
                    <span>
                      Remember that trading involves risks, and it is important
                      to manage your risks by using appropriate risk management
                      tools such as stop loss orders and limiting your leverage.
                      You should also familiarize yourself with the trading
                      platform and the market before making any trades.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center mr-3 w-full md:max-w-[260px]'>
          <img
            alt=''
            src='/images/my-first-stock-trade-quest/mfstq_illustration_3_1.png'
            className='w-full md:max-w-[260px]'
          />
        </div>
      </div>
      <div className='md:hidden block'>
        <div className='mt-4 sm:mt-6'>
          <div className='flex flex-col sm:flex-row justify-center items-center w-full bg-secondary-50 p-3 pr-4'>
            <div className='flex flex-col items-center'>
              <div
                className='w-14 h-14 bg-contain bg-center bg-no-repeat'
                style={{
                  backgroundImage:
                    'url("/images/my-first-stock-trade-quest/rebeka_profile.png")'
                }}
              />
              <div className='font-semibold text-center text-sm mt-2'>
                REBEKA
              </div>
            </div>
            <div className='w-full mt-4 sm:mt-0 sm:ml-6 italic text-sm sm:text-base text-slate-600'>
              <div>
                <span>
                  If you don't find the verification link in your inbox, check
                  your spam folder, maybe it landed there.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
