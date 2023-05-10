/* eslint-disable react/no-unescaped-entities */
import React from "react";
import PrepareForRegistration from "../first-stock/PrepareForRegistration";
import StepAccountOpening from "../first-stock/StepAccountOpening";
import StepsToChooseBroker from "../first-stock/StepsToChooseBroker";
import { useState } from "react";

const MyFirstStockTradeQuestComponent = () => {
  const [showStage1, setShowStage1] = useState(false);
  const [showStage2, setShowStage2] = useState(false);
  const [showStage3, setShowStage3] = useState(false);

  return (
    <div>
      <div className='w-full overflow-x-hidden bg-secondary-50 flex justify-center px-3 lg:px-[28%] md:py-8 text-sm sm:text-base'>
        <div className='flex flex-col items-center pt-8 max-w-col-9'>
          <h1 className='text-center font-bold text-4xl lg:text-5xl w-full'>
            My First Stock Trade Quest
          </h1>
          <p className='text-center mt-2 text-gray-500'>
            A step-by-step guide that helps beginners to successfully buy their
            first stocks within a few days.
          </p>
          <div className='mt-6 sm:mt-8 text-xl sm:text-2xl text-center font-semibold'>
            Hey, we are happy that you’re here!
          </div>
          <div className='mt-6 sm:mt-8'>
            Buying stocks and starting{" "}
            <span className='font-semibold'>your investment journey</span> is
            much easier and faster than beginner investors usually think. So we
            have good news for you. We have prepared this{" "}
            <span className='font-semibold'>step-by-step guide</span> with easy
            explanations and useful tips that will{" "}
            <span className='font-semibold'>
              help you buy your first stocks on your own
            </span>{" "}
            in no time.
          </div>
          <div className='bg-white rounded font-semibold text-base sm:text-lg flex items-center my-6 sm:my-8 py-4 px-4'>
            <div className='w-8 h-8'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='text-secondary-500 w-8 h-8'
              >
                <path
                  fillRule='evenodd'
                  d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </div>
            <div className='ml-4'>
              If you follow this guide, you’ll be able to purchase your first
              stocks by yourself!
            </div>
          </div>
          <div className='flex flex-col justify-center sm:items-center  sm:flex-row  mt-8'>
            <div className='w-full sm:w-1/3'>
              <div
                className='h-52 bg-contain bg-center bg-no-repeat'
                style={{
                  backgroundImage:
                    "url(/images/my-first-stock-trade-quest/christopher_profile.png)"
                }}
              ></div>
            </div>
            <div className='w-full sm:w-2/3 italic mt-3 sm:mt-0'>
              “Hey there! christopher, senior broker expert. At top5broker, we
              talk to a lot of beginner investors about their struggles to take
              the first steps in their investment journey. We wanted to ease
              their pain and help them take their investments into their own
              hands.
              <br />
              <br />
              Meet Rebeka, my colleague who is a beginner investor. She helped
              to create this guide for you showing the exact steps of her first
              successful stock purchase.“
            </div>
          </div>
          <div className='flex ustify-center sm:items-center sm:flex-row-reverse flex-row-reverse mt-10'>
            <div className='w-full sm:w-1/3'>
              <div
                className='h-52 bg-contain bg-center bg-no-repeat'
                style={{
                  backgroundImage:
                    "url(/images/my-first-stock-trade-quest/shola_profile.png)"
                }}
              ></div>
            </div>
            <div className='w-full sm:w-2/3 italic mt-3 sm:mt-0'>
              “Hi, I’m Rebeka, junior PR manager at Tob5Brokers. Opening an
              account and purchasing my first stocks was surprisingly easy
              compared with the difficulties and hurdles I expected initially.
              Hope my learnings will be useful, and let us know if you get lost
              on the way.”
            </div>
          </div>

          <div className='w-full flex flex-col items-start'>
            <h2 className='mt-6 sm:mt-8 font-bold text-2xl w-full sm:text-3xl text-center sm:text-left mb-4 sm:mb-6'>
              What can you expect?
            </h2>
            <ul className='list-outside m-2 pl-2 list-disc'>
              <li className='mt-3 sm:mt-4 text-primary-500'>
                <span className='text-black text-sm sm:text-base font-normal'>
                  A step-by-step guide how to complete your{" "}
                  <span className='font-semibold'>first stock purchase</span>
                </span>
              </li>
              <li className='mt-3 sm:mt-4 text-primary-500'>
                <span className='text-black text-sm sm:text-base font-normal'>
                  Each step is explained using{" "}
                  <span className='font-semibold'>
                    screenshots and instructions
                  </span>{" "}
                  on how to open an account, deposit money and make your first
                  purchase
                </span>
              </li>
              <li className='mt-3 sm:mt-4 text-primary-500'>
                <span className='text-black text-sm sm:text-base font-normal'>
                  You can{" "}
                  <span className='font-semibold'>track your progress</span>{" "}
                  toward completing the process
                </span>
              </li>
              <li className='mt-3 sm:mt-4 text-primary-500'>
                <span className='text-black text-sm sm:text-base font-normal'>
                  We’ll <span className='font-semibold'>provide help</span> if
                  you are stuck or need more information
                </span>
              </li>
            </ul>
          </div>

          <div className='bg-white rounded font-semibold text-base sm:text-lg flex items-center my-6 sm:my-8 py-4 px-4'>
            If you’re ready, let’s start with the first step: choosing a broker
            where you’ll carry out your first trade.
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center p-4 lg:px-[28%] bg-gray-50'>
        <div className='flex flex-col items-center w-full'>
          <div id='stage_0' className='pt-16 -mt-16'></div>
          <StepsToChooseBroker
            showStage1={showStage1}
            setShowStage1={setShowStage1}
            showStage2={showStage2}
            setShowStage2={setShowStage2}
          />
          <div id='stage_1' className='pt-16 -mt-16'></div>
          <PrepareForRegistration
            showStage2={showStage2}
            setShowStage2={setShowStage2}
            showStage3={showStage3}
            setShowStage3={setShowStage3}
          />
          <div id='stage_2' className='pt-16 -mt-16'></div>
          <StepAccountOpening
            showStage3={showStage3}
            setShowStage3={setShowStage3}
          />
        </div>
      </div>
    </div>
  );
};

export default MyFirstStockTradeQuestComponent;
