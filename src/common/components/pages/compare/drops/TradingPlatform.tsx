import React, { useContext } from "react";
import Score from "../../../score/Score";
import { CompareContext, ICompareContext } from "../context";
import { SortElement } from "./BasicData";

const TradingPlatform = () => {
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
                <div className='text-center text-xs sm:text-sm font-medium'>
                  Mobile platform score
                </div>
              </div>
            </div>
            <div className='h-16 max-h-16 relative flex flex-row items-start justify-center'>
              <Score
                score={
                  broker.broker_trading_platform.mobile_platform.score ?? 0
                }
              />
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
            <div className='relative bg-white'>
              <div className='mb-0 flex flex-row justify-center items-start'>
                <div className='text-center text-xs sm:text-sm font-medium'>
                  Desktop platform score
                </div>
              </div>
            </div>
            <div className='h-16 max-h-16 relative flex flex-row items-start justify-center'>
              <Score
                score={
                  broker.broker_trading_platform.desktop_platform.score ?? 0
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradingPlatform;
