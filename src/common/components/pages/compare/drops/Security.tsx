import React, { useContext } from "react";
import { CompareContext, ICompareContext } from "../context";
import { TickIcon, WrongIcon } from "./AccountOpening";
import { SortElement } from "./BasicData";
import { TextWithIconTitle } from "./FeesComponent";

const Security = () => {
  const [sortBrokers, setSortBrokers] = React.useState<boolean>(true);

  const { topBarBrokers, startingBrokerIndex } =
    useContext<ICompareContext>(CompareContext);

  return (
    <div className='flex'>
      <div className='pt-3 flex flex-row gap-3'>
        {topBarBrokers.slice(startingBrokerIndex).map((broker, index) => (
          <div key={broker.broker_id} className='w-[300px] flex flex-col'>
            <TextWithIconTitle
              title='The protection amount depends on the country where you opened your account. In the US, forex trading and commodity-related contract (e.g. futures or options) are generally not covered.'
              text='Investor protection amount'
            />
            <p className='overflow-hidden text-ellipsis text-center font-light text-xs sm:text-sm leading-snug mt-4'>
              {broker.security.investor_protection_amount}
            </p>
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
                    text='Banking background'
                    title='Whether the broker has a banking background'
                  />
                </div>
              </div>
            </div>
            <div className='h-16 max-h-16 relative flex flex-row items-start justify-center py-1'>
              {broker.security.banking_background ? (
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
                    text='Listed on stock exchange'
                    title='The broker is listed on stock exchange'
                  />
                </div>
              </div>
            </div>
            <div className='h-16 max-h-16 relative flex flex-row items-start justify-center py-1'>
              {broker.security.listed_stock_exchange ? (
                <TickIcon />
              ) : (
                <WrongIcon />
              )}
            </div>
            <div className='relative bg-white mt-3'>
              <div className='mb-0 flex flex-row justify-center items-start'>
                <div className='text-center text-xs sm:text-sm font-semibold'>
                  Foundation date
                </div>
                <span>{broker.security.foundation_date}</span>
              </div>
            </div>
            <div className='relative bg-white mt-3'>
              <div className='mb-0 flex flex-row justify-center items-start'>
                <div className='text-center text-xs sm:text-sm font-semibold flex flex-col'>
                  <TextWithIconTitle
                    text='Country of regulation'
                    title='Which countries regulators oversee the broker'
                  />
                </div>
              </div>
              <p className='overflow-hidden text-ellipsis text-center font-light text-xs sm:text-sm leading-snug mt-4'>
                {broker.security.country_regulation.map((string, index) => {
                  return (
                    <span key={index}>
                      {string}
                      {index + 1 === broker.security.country_regulation.length
                        ? ""
                        : ","}
                    </span>
                  );
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Security;
