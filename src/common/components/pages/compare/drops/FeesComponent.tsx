import React, { useContext, useState } from "react";
import { CompareContext, ICompareContext } from "../context";

export const TextWithIconTitle = ({
  text,
  title
}: {
  text: string;
  title: string;
}) => (
  <div className='mb-0 flex flex-row justify-center items-start'>
    <div className='w-4 h-4 mx-1 opacity-0' />
    <div className='text-center text-xs sm:text-sm font-semibold'>{text}</div>
    <div className='text-lg' title={title}>
      <div className='flex flex-row items-center'>
        <svg
          viewBox='0 0 24 24'
          fill='currentColor'
          className='w-4 h-4 text-secondary-500 mx-1'
        >
          <path d='M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z' />
          <path d='M11 11H13V17H11V11ZM11 7H13V9H11V7Z' />
        </svg>
      </div>
    </div>
  </div>
);

const FeesComponent = () => {
  const { topBarBrokers, startingBrokerIndex } =
    useContext<ICompareContext>(CompareContext);

  return (
    <div className='flex'>
      <div className='pt-3 flex flex-row gap-3'>
        {topBarBrokers.slice(startingBrokerIndex).map((broker) => {
          return (
            <div
              className='min-h-16 w-[300px] z-50 flex flex-col relative py-2 '
              key={broker.broker_id}
            >
              <TextWithIconTitle
                text='Fees summary'
                title={broker.broker_fees.fees_summary}
              />
              <p className='overflow-hidden text-ellipsis text-center font-light text-xs sm:text-sm leading-snug mt-4'>
                {broker.broker_fees.fees_summary}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeesComponent;
