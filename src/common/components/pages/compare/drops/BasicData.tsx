import React, { useContext, useState } from "react";
import Score from "../../../score/Score";
import { CompareContext, ICompareContext } from "../context";

export const SortElement = ({ className }: { className: string }) => (
  <svg
    viewBox='0 0 24 24'
    fill='currentColor'
    className={`h-4 w-4 text-white group-hover:text-gray-100 ${className}`}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M14.4286 17.1133L19.4286 20L14.4286 22.8868L14.4286 20.5L4 20.5L4 19.5L14.4286 19.5L14.4286 17.1133Z'
    />
    <rect
      x='14.2861'
      y='14.8574'
      width='5.14288'
      height='3.85716'
      transform='rotate(-90 14.2861 14.8574)'
    />
    <rect
      x='9.14258'
      y='14.8574'
      width='9.00004'
      height='3.85716'
      transform='rotate(-90 9.14258 14.8574)'
    />
    <rect
      x={4}
      y='14.8574'
      width='12.8572'
      height='3.85716'
      transform='rotate(-90 4 14.8574)'
    />
  </svg>
);

const BasicData = () => {
  const [sortBrokers, setSortBrokers] = useState<boolean>(true);

  const { topBarBrokers, startingBrokerIndex } =
    useContext<ICompareContext>(CompareContext);

  return (
    <div className='flex'>
      <div className='pt-3 flex flex-row gap-3'>
        {topBarBrokers
          .slice(startingBrokerIndex)
          .map((broker, _index: number) => {
            return (
              <div
                className='min-h-16 w-[300px] z-20 flex flex-col items-center relative'
                key={_index}
              >
                <div className='relative w-full'>
                  {!_index && (
                    <div
                      className={`absolute  z-50 left-0 top-4 w-8 h-8 flex items-center justify-center border-2 border-secondary-500 rounded-lg ${
                        sortBrokers && "bg-secondary-500"
                      } cursor-pointer `}
                      onClick={() => {
                        setSortBrokers((cur) => !cur);
                      }}
                    >
                      <SortElement
                        className={`${sortBrokers ? "" : "hidden"}`}
                      />
                    </div>
                  )}
                  <div className='relative bg-white mt-3'>
                    <div className='z-1 left-2 absolute'>{/*  */}</div>
                    <div className='mb-0 flex flex-row justify-center items-start'>
                      <div className='text-center text-xs sm:text-sm font-medium'>
                        Overall Score
                      </div>
                    </div>
                  </div>
                  <div className='h-16 max-h-16 flex flex-row items-start justify-center'>
                    <Score score={broker.broker_details.score} />
                  </div>
                </div>
                <div className='h-28 px-2 text-center sm:h-24 sm:px-8'>
                  <p className='leading-tight text-xs sm:text-sm font-light'>
                    {broker.broker_details.broker_description}
                  </p>
                </div>
                <div className='h-12 sm:h-9 mt-4'>
                  <div className='flex flex-col sm:flex-row items-center'>
                    <svg
                      viewBox='0 0 24 24'
                      className='text-[40px] sm:text-[48px]'
                      style={{ width: "1em", height: "1em" }}
                    >
                      <path
                        d='M9.94015 15.1298L8.16859 15.774L7.36332 13.6804L5.51125 12.9557L6.07494 11.1841L4.62549 9.49306L6.07494 8.04361L5.51125 6.03049L7.36332 5.38628L8.16859 3.45368L9.94015 3.93684L11.5506 2.64844L13.0001 3.93684L15.0937 3.45368L15.899 5.38628L17.5095 6.03049V8.04361L18.5563 9.49306L17.5095 11.1841V12.9557L15.899 13.6804L15.0937 15.774L13.0001 15.1298L11.5506 16.5793L9.94015 15.1298Z'
                        fill='#FFF7BE'
                      />
                      <path
                        d='M8.99121 20.4746V15.6782L9.99845 15.2944L11.6292 16.7813L13.212 15.2944L14.2193 15.6782V20.4746L11.6292 18.3162L8.99121 20.4746Z'
                        fill='#FFF7BE'
                      />
                      <path
                        d='M4.12571 9.91973L5.45514 11.2647L4.97524 13.0937C4.9147 13.3247 5.05129 13.5611 5.28158 13.624L7.10598 14.1213L7.6035 15.9459C7.66617 16.1764 7.90262 16.3139 8.13375 16.2522L8.56818 16.1383V20.7081C8.56818 20.877 8.6659 21.0306 8.81864 21.1022C8.97181 21.1733 9.15195 21.1506 9.28175 21.0423L11.6137 19.0991L13.9456 21.0423C14.0252 21.1088 14.1242 21.1432 14.2241 21.1432C14.2868 21.1432 14.3498 21.1296 14.4087 21.1022C14.5614 21.0306 14.6592 20.877 14.6592 20.7081V16.1385L15.0934 16.2525C15.3241 16.3136 15.5609 16.1764 15.6236 15.9461L16.1211 14.1215L17.9458 13.6242C18.1758 13.5613 18.3126 13.3249 18.2521 13.094L17.7722 11.2647L19.1016 9.91973C19.2692 9.75021 19.2692 9.47744 19.1016 9.30792L17.7722 7.96319L18.2521 6.13412C18.3126 5.9032 18.176 5.66676 17.9458 5.60388L16.1214 5.10656L15.6238 3.28195C15.5612 3.05167 15.3241 2.91464 15.0936 2.97561L13.2643 3.45551L11.9196 2.12587C11.7501 1.95804 11.4773 1.95804 11.3078 2.12587L9.96304 3.45551L8.13396 2.9754C7.90368 2.91464 7.66639 3.05145 7.60372 3.28173L7.10619 5.10635L5.28158 5.60366C5.05151 5.66654 4.9147 5.90299 4.97524 6.1339L5.45514 7.96319L4.12571 9.30792C3.9581 9.47744 3.9581 9.75021 4.12571 9.91973ZM13.789 19.7791L11.8922 18.1986C11.7307 18.0639 11.4966 18.0639 11.3352 18.1986L9.43832 19.7791V15.91L9.96304 15.7724L11.3078 17.1018C11.3925 17.1857 11.5032 17.2275 11.6137 17.2275C11.7241 17.2275 11.8348 17.1857 11.9196 17.1018L13.2643 15.7724L13.789 15.9101V19.7791ZM6.24816 8.39869C6.35629 8.28928 6.39878 8.13102 6.35969 7.98231L5.92632 6.32977L7.57504 5.88047C7.72353 5.83989 7.83973 5.7239 7.88031 5.5752L8.32982 3.92648L9.98215 4.36006C10.1306 4.39872 10.2893 4.35666 10.3985 4.24853L11.6137 3.04699L12.8288 4.24853C12.9382 4.35666 13.0958 4.39872 13.2452 4.36006L14.8977 3.92669L15.3472 5.57541C15.3878 5.72412 15.504 5.84011 15.6525 5.88068L17.301 6.32998L16.8676 7.98231C16.8286 8.13102 16.871 8.28928 16.9792 8.39869L18.1805 9.61382L16.9792 10.8292C16.871 10.9386 16.8286 11.0968 16.8676 11.2455L17.301 12.8981L15.6523 13.3474C15.5038 13.388 15.3876 13.504 15.347 13.6527L14.8975 15.3014L13.2452 14.8678C13.0958 14.8287 12.9382 14.8712 12.8288 14.9793L11.6137 16.1807L10.3985 14.9793C10.3161 14.8978 10.2056 14.8536 10.0926 14.8536C10.0559 14.8536 10.0187 14.8582 9.98215 14.8678L8.32961 15.3012L7.8801 13.6525C7.83952 13.5037 7.72332 13.3878 7.57483 13.3472L5.92632 12.8979L6.35969 11.2455C6.39878 11.0968 6.35629 10.9386 6.24816 10.8292L5.04683 9.61382L6.24816 8.39869Z'
                        fill='#DDC311'
                      />
                      <path
                        d='M11.6139 13.5295C13.7729 13.5295 15.5295 11.7729 15.5295 9.61387C15.5295 7.45488 13.7729 5.69824 11.6139 5.69824C9.45488 5.69824 7.69824 7.45488 7.69824 9.61387C7.69824 11.7729 9.45488 13.5295 11.6139 13.5295ZM11.6139 6.56838C13.2932 6.56838 14.6594 7.93456 14.6594 9.61387C14.6594 11.2932 13.2932 12.6594 11.6139 12.6594C9.93456 12.6594 8.56838 11.2932 8.56838 9.61387C8.56838 7.93456 9.93456 6.56838 11.6139 6.56838Z'
                        fill='#DDC311'
                      />
                    </svg>
                    <p className='block items-center text-sm sm:text-base whitespace-nowrap font-medium'>
                      Best online broker
                    </p>
                  </div>
                </div>
                <div>
                  <div className='relative w-full'>
                    <div className='relative bg-white mt-3'>
                      <div className='z-1 left-2 absolute' />
                      <div className='mb-0 flex flex-row justify-center items-start'>
                        <div className='w-4 h-4 mx-1 opacity-0' />
                        <div className='text-center text-xs sm:text-sm font-medium'>
                          Country of origin
                        </div>
                        <div
                          className='text-lg'
                          title="Broker's country of establishment"
                        >
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
                    </div>
                    <div className='h-16 max-h-16 relative flex flex-row items-start justify-center'>
                      <p className='overflow-hidden text-ellipsis text-center font-light text-xs sm:text-sm leading-snug mt-4'>
                        {broker.broker_details.country_origin}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BasicData;
