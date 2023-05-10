/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import Slider from "@mui/material/Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { WhereToStart } from "./WhereToBuy";
import { AiOutlineCheckCircle } from "react-icons/ai";

const StepsToChooseBroker = ({
  showStage1,
  setShowStage1,
  setShowStage2
}: any) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [swiper, setSwiper] = useState<any>(null);

  const handleSliderChange = (value: number, _index: number) => {
    if (swiper && currentStep !== 1) {
      setCurrentStep(Number(value));
    }
    return "";
  };

  useEffect(() => {
    if (currentStep === 5) {
      setShowStage1(false);
      setShowStage2(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep]);

  return (
    <div className='w-full max-w-col-9 mb-4 bg-white border rounded border-white'>
      <div
        className='flex justify-between cursor-pointer py-3 pl-5 pr-3'
        onClick={() => {
          if (currentStep === 5) setCurrentStep(4);
          setShowStage1(!showStage1);
        }}
      >
        <div className='font-semibold text-lg sm:text-xl'>
          1. Where to buy your first stock
        </div>
        <div className='flex items-center ml-2  gap-1'>
          <div className='font-semibold text-xs sm:text-sm whitespace-nowrap'>
            <div
              className={`${
                currentStep === 5 ? "text-secondary-500" : "text-gray-500"
              }`}
            >
              {currentStep === 5 ? (
                <div className='flex gap-2 items-center'>
                  <AiOutlineCheckCircle size={20} />
                  completed
                </div>
              ) : (
                `Step ${currentStep}/4`
              )}
            </div>
          </div>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`text-lg font-semibold w-8 ${
              showStage1 ? "rotate-180" : "rotate-0"
            } duration-150`}
          />
        </div>
      </div>
      <div
        className={`${
          !showStage1 && "hidden"
        } px-5 py-3 border-t border-gray-100`}
      >
        {WhereToStart.map((Component, _index) => {
          return (
            <React.Fragment key={_index}>
              {_index === currentStep - 1 && <Component key={_index} />}
            </React.Fragment>
          );
        })}

        <div className='flex items-center justify-end'>
          <div className='flex'>
            <button
              className='flex flex-row items-center justify-center font-medium uppercase tracking-wider cursor-pointer select-none shadow-bc hover:shadow-bcHover rounded-lg box-border whitespace-nowrap  text-sm h-8 sm:h-10 px-[13px] sm:px-[18px] bg-white border-2 border-slate-400 text-slate-500 mr-2 bg-opacity-60 border-opacity-25 hover:cursor-default hover:shadow-bc'
              type='button'
              disabled={currentStep === 1}
              onClick={() => {
                setCurrentStep(currentStep - 1);
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-4 h-4'
              >
                <path
                  fillRule='evenodd'
                  d='M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>
            <button
              className='flex flex-row items-center justify-center font-medium uppercase tracking-wider cursor-pointer select-none shadow-bc hover:shadow-bcHover rounded-lg box-border whitespace-nowrap  text-sm h-8 sm:h-10  px-[11px] sm:px-[16px] bg-white border-2 border-secondary-500 text-secondary-500'
              type='button'
              disabled={currentStep === 5}
              onClick={() => {
                setCurrentStep(currentStep + 1);
              }}
            >
              {currentStep === 4 ? "FINISH" : "NEXT"}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='ml-2 w-4 h-4'
              >
                <path
                  fillRule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className='my-6 w-full'>
          <Slider
            defaultValue={1}
            getAriaValueText={handleSliderChange}
            step={1}
            size={"small"}
            marks
            min={0}
            max={4}
            onChange={(event: Event, newValue?: number | number[]) => {
              Number(newValue) >= 1 && setCurrentStep(Number(newValue));
            }}
            value={currentStep}
          />
        </div>

        <div>
          <a
            className='flex flex-row items-center justify-center font-medium uppercase tracking-wider cursor-pointer select-none shadow-bc hover:shadow-bcHover rounded-lg box-border whitespace-nowrap  text-sm h-8 sm:h-10 px-[13px] sm:px-[18px] bg-white border-2 border-slate-400 text-slate-500 w-48'
            target=''
            href='#'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='mr-2 w-4 h-4'
            >
              <path
                fillRule='evenodd'
                d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z'
                clipRule='evenodd'
              ></path>
            </svg>
            Need some help?
          </a>
        </div>
      </div>
    </div>
  );
};

export default StepsToChooseBroker;
