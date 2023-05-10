import React, { useContext } from "react";
import { CompareContext, ICompareContext } from "../context";
import { TickIcon, WrongIcon } from "./AccountOpening";
import { SortElement } from "./BasicData";
import { TextWithIconTitle } from "./FeesComponent";

const MarketsAndProducts = () => {
  const [sortBrokers, setSortBrokers] = React.useState<boolean>(true);

  const { topBarBrokers, startingBrokerIndex } =
    useContext<ICompareContext>(CompareContext);

  return (
    <div className='flex'>
      <div className='pt-3 flex flex-row gap-3'>
        {topBarBrokers.slice(startingBrokerIndex).map((broker, index) => (
          <div className='relative w-[300px]' key={broker.broker_id}>
            {!index && (
              <div
                className={`absolute  z-50 left-0 top-4 w-8 h-8 flex items-center justify-center border-2 border-secondary-500 rounded-lg ${
                  sortBrokers && "bg-secondary-500"
                } cursor-pointer `}
                onClick={() => {
                  setSortBrokers((cur) => !cur);
                }}
              >
                <SortElement className={`${sortBrokers ? "" : "hidden"}`} />
              </div>
            )}
            <div className='relative bg-white mt-3'>
              <div className='mb-0 flex flex-row justify-center items-start'>
                <div className='text-center text-xs sm:text-sm font-semibold'>
                  <TextWithIconTitle
                    text='Phone'
                    title='You can reach the broker by phone'
                  />
                </div>
              </div>
            </div>
            <div className='h-16 max-h-16 relative flex flex-row items-start justify-center py-1'>
              {broker.broker_customer_service.phone ? (
                <TickIcon />
              ) : (
                <WrongIcon />
              )}
            </div>
          </div>
        ))}
      </div>
      <div className='flex gap-10'>
        {topBarBrokers.map((broker, index) => (
          <div className='relative w-[300px]' key={broker.broker_id}>
            {!index && (
              <div
                className={`absolute  z-50 left-0 top-4 w-8 h-8 flex items-center justify-center border-2 border-secondary-500 rounded-lg ${
                  sortBrokers && "bg-secondary-500"
                } cursor-pointer `}
                onClick={() => {
                  setSortBrokers((cur) => !cur);
                }}
              >
                <SortElement className={`${sortBrokers ? "" : "hidden"}`} />
              </div>
            )}
            <div className='relative bg-white mt-3'>
              <div className='mb-0 flex flex-row justify-center items-start'>
                <div className='text-center text-xs sm:text-sm font-semibold'>
                  <TextWithIconTitle
                    text='Live chat'
                    title='Live chat is available'
                  />
                </div>
              </div>
            </div>
            <div className='h-16 max-h-16 relative flex flex-row items-start justify-center py-1'>
              {broker.broker_markets_and_products.fractional_shares ? (
                <TickIcon />
              ) : (
                <WrongIcon />
              )}
            </div>
          </div>
        ))}
      </div>
      <div className='flex gap-10'>
        {topBarBrokers.map((broker, index) => (
          <div className='relative w-[300px]' key={broker.broker_id}>
            {!index && (
              <div
                className={`absolute  z-50 left-0 top-4 w-8 h-8 flex items-center justify-center border-2 border-secondary-500 rounded-lg ${
                  sortBrokers && "bg-secondary-500"
                } cursor-pointer `}
                onClick={() => {
                  setSortBrokers((cur) => !cur);
                }}
              >
                <SortElement className={`${sortBrokers ? "" : "hidden"}`} />
              </div>
            )}
            <div className='relative bg-white mt-3'>
              <div className='mb-0 flex flex-row justify-center items-start'>
                <div className='text-center text-xs sm:text-sm font-semibold'>
                  <TextWithIconTitle
                    text='Email'
                    title='Email support is available'
                  />
                </div>
              </div>
            </div>
            <div className='h-16 max-h-16 relative flex flex-row items-start justify-center py-1'>
              {broker.broker_customer_service.email ? (
                <TickIcon />
              ) : (
                <WrongIcon />
              )}
            </div>
          </div>
        ))}
      </div>
      <div className='flex gap-10'>
        {topBarBrokers.map((broker, index) => (
          <div className='relative w-[300px]' key={broker.broker_id}>
            {!index && (
              <div
                className={`absolute  z-50 left-0 top-4 w-8 h-8 flex items-center justify-center border-2 border-secondary-500 rounded-lg ${
                  sortBrokers && "bg-secondary-500"
                } cursor-pointer `}
                onClick={() => {
                  setSortBrokers((cur) => !cur);
                }}
              >
                <SortElement className={`${sortBrokers ? "" : "hidden"}`} />
              </div>
            )}
            <div className='relative bg-white mt-3'>
              <div className='mb-0 flex flex-row justify-center items-start'>
                <div className='text-center text-xs sm:text-sm font-semibold'>
                  <TextWithIconTitle
                    text='24/7 availability'
                    title='Forex are available'
                  />
                </div>
              </div>
            </div>
            <div className='h-16 max-h-16 relative flex flex-row items-start justify-center py-1'>
              {broker.broker_customer_service.availability_24 ? (
                <TickIcon />
              ) : (
                <WrongIcon />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketsAndProducts;
