import { NextPage } from "next";
import React from "react";

const BestBroker: NextPage<{brokers:any, title:string} > = ({brokers, title}) => {
  return (
    <div className="w-[20rem]">
      <div className="relative bg-white flex flex-col w-full rounded shadow-lg p-6">
        <div className="flex justify-center items-center font-normal font-geomanistMedium text-2xl mb-2 mt-2">
          {title}
        </div>
        <div className="w-full">
          <div className="pb-13">
            {(brokers as []).map((broker: any, index: number) => {
              return (
                <div className="w-full " key={index}>
                  <span>
                    <a
                      href={broker.broker_details.broker_link}
                      rel="noreferrer nofollow"
                      target="_blank"
                    >
                      <div className="hover:bg-secondary-50/20 px-2 py-[17px]">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center justify-start w-7 pl-1 font-semibold">
                            {index + 1}
                          </div>
                          <div className="w-full">
                            <div className="flex items-center text-sm font-semibold">
                              <div className="flex items-center pr-1.5">
                                <div
                                  className="shadow-[0_0_15px_-3px_rgba(0,0,0,0.1)] rounded-md w-6 h-6 sm:w-8 sm:h-8 hover:opacity-80 bg-contain bg-center bg-no-repeat"
                                  style={{
                                    backgroundImage: `url(${broker.broker_details.broker_logo})`,
                                  }}
                                />
                              </div>
                              <div className="max-w-[10rem] truncate capitalize font-[500] font-geomanistMedium text-[14px]">
                                {broker.broker_details.name}
                              </div>
                            </div>
                          </div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="inline mb-px h-5 w-5 ml-2"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="ml-6 text-[10px] text-gray-400">
                          {broker?.loseMoney}
                        </span>
                      </div>
                    </a>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestBroker;
