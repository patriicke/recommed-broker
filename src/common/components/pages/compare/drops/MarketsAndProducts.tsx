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
                    text='Stocks'
                    title='Stocks are available'
                  />
                </div>
              </div>
            </div>
            <div className='h-16 max-h-16 relative flex flex-row items-start justify-center py-1'>
              {broker.broker_markets_and_products.stocks ? (
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
                    text='Fractional shares'
                    title='Fractional shares are available'
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
                  <TextWithIconTitle text='ETFs' title='ETFs are available' />
                </div>
              </div>
            </div>
            <div className='h-16 max-h-16 relative flex flex-row items-start justify-center py-1'>
              {broker.broker_markets_and_products.etfs ? (
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
                  <TextWithIconTitle text='Forex' title='Forex are available' />
                </div>
              </div>
            </div>
            <div className='h-16 max-h-16 relative flex flex-row items-start justify-center py-1'>
              {broker.broker_markets_and_products.forex ? (
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
                  <TextWithIconTitle text='Funds' title='Funds are available' />
                </div>
              </div>
            </div>
            <div className='h-16 max-h-16 relative flex flex-row items-start justify-center py-1'>
              {broker.broker_markets_and_products.funds ? (
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
                  <TextWithIconTitle text='Bonds' title='Bonds are available' />
                </div>
              </div>
            </div>
            <div className='h-16 max-h-16 relative flex flex-row items-start justify-center py-1'>
              {broker.broker_markets_and_products.bonds ? (
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
                    text='Options'
                    title='Options are available'
                  />
                </div>
              </div>
            </div>
            <div className='h-16 max-h-16 relative flex flex-row items-start justify-center py-1'>
              {broker.broker_markets_and_products.options ? (
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
                    text='Futures'
                    title='Futures are available'
                  />
                </div>
              </div>
            </div>
            <div className='h-16 max-h-16 relative flex flex-row items-start justify-center py-1'>
              {broker.broker_markets_and_products.futures ? (
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
                    text='Crypto'
                    title='Crypto are available'
                  />
                </div>
              </div>
            </div>
            <div className='h-16 max-h-16 relative flex flex-row items-start justify-center py-1'>
              {broker.broker_markets_and_products.crypto ? (
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
                  <TextWithIconTitle text='CFDs' title='CFDs are available' />
                </div>
              </div>
            </div>
            <div className='h-16 max-h-16 relative flex flex-row items-start justify-center py-1'>
              {broker.broker_markets_and_products.cfds ? (
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
          <div key={broker.broker_id} className='w-[300px] flex flex-col'>
            <h1 className='font-bold text-center'>CFD disclaimer</h1>
            <p className='overflow-hidden text-ellipsis text-center font-light text-xs sm:text-sm leading-snug mt-4'>
              {broker.broker_markets_and_products.cfd_discraimer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketsAndProducts;
