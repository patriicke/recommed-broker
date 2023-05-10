import React, { useContext } from "react";
import { CompareContext, ICompareContext } from "../context";
import { TextWithIconTitle } from "./FeesComponent";

export const TickIcon = () => (
  <svg
    viewBox='0 0 24 24'
    fill='currentColor'
    className='w-8 h-8 mt-4'
    style={{ color: "rgb(0, 168, 130)" }}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 21.697C17.3555 21.697 21.697 17.3555 21.697 12C21.697 6.64451 17.3555 2.30303 12 2.30303C6.64451 2.30303 2.30303 6.64451 2.30303 12C2.30303 17.3555 6.64451 21.697 12 21.697ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z'
    />
    <path d='M10.6095 15.0791C10.7807 15.2553 11.0326 15.348 11.2845 15.348C11.5364 15.348 11.7883 15.246 11.9595 15.0791L17.0173 10.0726C17.3599 9.72958 17.3397 9.19184 16.9669 8.87661C16.5941 8.56139 16.0098 8.57993 15.6672 8.92297L11.2845 13.2619L9.2896 11.2872C8.94704 10.9441 8.36268 10.9256 7.98989 11.2408C7.61711 11.556 7.59696 12.0938 7.93952 12.4368L10.6095 15.0791Z' />
  </svg>
);

export const WrongIcon = () => (
  <svg
    viewBox='0 0 24 24'
    fill='currentColor'
    className='w-8 h-8 mt-4'
    style={{ color: "rgb(226, 1, 69)" }}
  >
    <path d='M14.7167 15.5775L8.20367 9.06449C7.96597 8.82679 7.96597 8.43062 8.20367 8.19292C8.44137 7.95522 8.83754 7.95522 9.07524 8.19292L15.5882 14.7059C15.8259 14.9436 15.8259 15.3398 15.5882 15.5775C15.3505 15.831 14.9544 15.831 14.7167 15.5775Z' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8.96052 8.30524C8.7847 8.12943 8.48887 8.12943 8.31305 8.30524C8.13724 8.48106 8.13724 8.77689 8.31305 8.9527L14.8297 15.4693C15.0048 15.6561 15.2949 15.6561 15.47 15.4694L15.4735 15.4656C15.6493 15.2898 15.6493 14.9941 15.4735 14.8182L8.96052 8.30524ZM8.08895 8.08113C8.38853 7.78155 8.88504 7.78155 9.18462 8.08113L15.6976 14.5941C15.9966 14.8931 15.9972 15.3882 15.6994 15.688C15.3995 16.0058 14.9002 16.0058 14.6002 15.6881L8.08895 9.17681C7.78936 8.87722 7.78936 8.38072 8.08895 8.08113Z'
    />
    <path d='M8.20481 14.7059L14.7178 8.19292C14.9555 7.95522 15.3517 7.95522 15.5894 8.19292C15.8271 8.43062 15.8271 8.82679 15.5894 9.06449L9.07638 15.5775C8.83868 15.8152 8.44251 15.8152 8.20481 15.5775C7.95126 15.3398 7.95126 14.9436 8.20481 14.7059Z' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M15.4747 8.30524C15.2988 8.12943 15.003 8.12943 14.8272 8.30524L8.31058 14.8219C8.12381 14.997 8.12376 15.2871 8.31053 15.4622L8.31425 15.4656C8.49007 15.6415 8.78584 15.6415 8.96166 15.4657L15.4747 8.9527C15.6505 8.77689 15.6505 8.48106 15.4747 8.30524ZM14.6031 8.08113C14.9027 7.78155 15.3992 7.78155 15.6988 8.08113C15.9984 8.38072 15.9984 8.87722 15.6988 9.17681L9.18577 15.6898C8.88678 15.9888 8.39167 15.9894 8.09189 15.6916C7.77409 15.3917 7.77406 14.8924 8.09179 14.5924L14.6031 8.08113Z'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 21.697C17.3555 21.697 21.697 17.3555 21.697 12C21.697 6.64451 17.3555 2.30303 12 2.30303C6.64451 2.30303 2.30303 6.64451 2.30303 12C2.30303 17.3555 6.64451 21.697 12 21.697ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z'
    />
  </svg>
);

const AccountOpening = () => {
  const { topBarBrokers, startingBrokerIndex } =
    useContext<ICompareContext>(CompareContext);

  return (
    <div className='flex'>
      <div className='pt-3 flex flex-row gap-3'>
        {topBarBrokers.slice(startingBrokerIndex).map((broker, _index) => {
          return (
            <div
              className='min-h-16 w-[300px] z-50 flex flex-col items-center justify-center relative py-2 gap-2 '
              key={_index}
            >
              <div className='relative w-full'>
                <div className='relative bg-white mt-3'>
                  <div className={`z-1 left-0 absolute ${_index && "hidden"}`}>
                    <div style={{ position: "relative" }}>
                      <div className='w-8 h-8 flex items-center justify-center border-2 border-secondary-500 rounded-lg text-red-500 group cursor-pointer bg-white hover:bg-secondary-500'>
                        <svg
                          viewBox='0 0 24 24'
                          fill='currentColor'
                          className='h-4 w-4 text-secondary-500 group-hover:text-white'
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M14.9999 17.1133L19.9999 20L14.9999 22.8868L14.9999 20.5L4.57129 20.5L4.57129 19.5L14.9999 19.5L14.9999 17.1133Z'
                          />
                          <rect
                            width='5.14288'
                            height='3.85716'
                            transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 9.71387 14.8574)'
                          />
                          <rect
                            width='9.00004'
                            height='3.85716'
                            transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 14.8574 14.8574)'
                          />
                          <rect
                            width='12.8572'
                            height='3.85716'
                            transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 20 14.8574)'
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className='mb-0 flex flex-row justify-center items-start'>
                    <div className='text-center text-xs sm:text-sm font-medium'>
                      Account opening fully online
                    </div>
                  </div>
                </div>
                <div className='h-16 max-h-16 relative flex flex-row items-start justify-center'>
                  {broker.broker_account_opening.full_online ? (
                    <TickIcon />
                  ) : (
                    <WrongIcon />
                  )}
                </div>
              </div>

              <TextWithIconTitle
                text='Minimum deposit'
                title="Top5Brokers' qualitative summary on the broker's prices"
              />
              <p className='overflow-hidden text-ellipsis text-center font-light text-xs sm:text-sm leading-snug mt-4'>
                *${broker.broker_account_opening.minimum_deposit}
              </p>
              <TextWithIconTitle
                text='Time to open account'
                title="Top5Brokers' qualitative summary on the broker's prices"
              />
              <p className='overflow-hidden text-ellipsis text-center font-light text-xs sm:text-sm leading-snug mt-4'>
                {broker.broker_account_opening.time_to_open_account}{" "}
                {broker.broker_account_opening.time_to_open_account <= 1
                  ? "day"
                  : "days"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AccountOpening;
