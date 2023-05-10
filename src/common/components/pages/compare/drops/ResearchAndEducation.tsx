import { useContext, useState } from "react";
import Score from "../../../score/Score";
import { CompareContext, ICompareContext } from "../context";
import { TickIcon, WrongIcon } from "./AccountOpening";
import { SortElement } from "./BasicData";

export const ResearchAndEducation = () => {
  const [sortBrokers, setSortBrokers] = useState<boolean>(true);

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
                  Research score
                </div>
              </div>
            </div>
            <div className='h-16 max-h-16 relative flex flex-row items-start justify-center'>
              <Score
                score={broker.broker_research_education.research_score ?? 0}
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
            <div className='relative bg-white mt-3'>
              <div className='mb-0 flex flex-row justify-center items-start'>
                <div className='text-center text-xs sm:text-sm font-medium'>
                  Charting quality
                </div>
              </div>
            </div>
            <div className='h-16 max-h-16 relative flex flex-row items-start justify-center'>
              {broker.broker_research_education.charting_quality}
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
                <div className='text-center text-xs sm:text-sm font-medium'>
                  Education score
                </div>
              </div>
            </div>
            <div className='h-16 max-h-16 relative flex flex-row items-start justify-center'>
              <Score
                score={broker.broker_research_education.education_score ?? 0}
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
            <div className='relative bg-white mt-3'>
              <div className='mb-0 flex flex-row justify-center items-start'>
                <div className='text-center text-xs sm:text-sm font-semibold'>
                  Demo Account
                </div>
              </div>
            </div>
            <div className='h-16 max-h-16 relative flex flex-row items-start justify-center py-1'>
              {broker.broker_research_education.demo_account ? (
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
