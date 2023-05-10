import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import React, { ReactNode, useContext, useEffect, useState } from "react";
import Score from "../../score/Score";
import { CompareContext, ICompareContext } from "./context";
import { SortElement } from "./drops/BasicData";

const DroperComponent: NextPage<{
  title: string;
  scoreTitle: string;
  Component: ReactNode;
}> = ({ title, scoreTitle, Component }) => {
  const [arrowDirection, setArrowDirection] = useState<boolean>(false);

  const [sortBrokers, setSortBrokers] = useState(false);

  const { topBarBrokers, startingBrokerIndex } =
    useContext<ICompareContext>(CompareContext);

  useEffect(() => {
    if (title === "Basic data of broker") {
      setArrowDirection(true);
    }
  }, [title]);

  return (
    <>
      <div
        className='flex flex-row relative cursor-pointer py-2 gap-2 group w-full border-gray-400 border-b-2'
        onClick={() => {
          setArrowDirection((cur) => !cur);
        }}
      >
        <div className='sm:top-1 transition-all rotate-0 w-full flex gap-1 items-center'>
          <div className='flex flex-row flex-wrap justify-center items-center h-8 w-8 rounded-full group-hover:bg-secondary-400'>
            <FontAwesomeIcon
              icon={faAngleDown}
              className={`group-hover:text-white ${
                arrowDirection ? "rotate-180" : "rotate-0"
              } ease-linear duration-100`}
            />
          </div>
          <p className='pl-2 font-semibold sm:text-lg text-[0.4em]'>{title}</p>
        </div>
      </div>
      <div
        className={`flex gap-10 mt-3 ${
          (title === "Basic data of broker" || title === "Security") && "hidden"
        }`}
      >
        {topBarBrokers.slice(startingBrokerIndex).map((broker, index) => (
          <div className='relative w-[300px]' key={broker.broker_id}>
            {!index && (
              <div
                className={`absolute z-50 left-0 top-4 w-8 h-8 flex items-center justify-center border-2 border-secondary-500 rounded-lg ${
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
                  {scoreTitle} score
                </div>
              </div>
            </div>
            <div className='h-7 max-h-10 w-[300px] relative flex flex-row items-start justify-center'>
              <Score
                score={
                  title === "Basic data of broker"
                    ? broker.broker_details.score
                    : title === "Fees"
                    ? broker.broker_fees.score
                    : title === "Deposit and withdrawal"
                    ? broker.broker_deposit_and_withdrawal.score
                    : title === "Account opening"
                    ? broker.broker_account_opening.score
                    : title === "Trading platform"
                    ? broker.broker_trading_platform.web_platform.score ?? 0
                    : title === "Markets and products"
                    ? broker.broker_markets_and_products.score
                    : title === "Research, education"
                    ? broker.broker_research_education.research_score
                    : title === "Customer service"
                    ? broker.broker_customer_service.score
                    : broker.broker_details.score
                }
              />
            </div>
          </div>
        ))}
      </div>
      <div className='w-full'>{arrowDirection == true && Component}</div>
    </>
  );
};

export default DroperComponent;
