/* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next";
import Link from "next/link";
import { useContext, useState } from "react";
import { brokers } from "../../../../data";
import Score from "../../score/Score";
import { CompareContext, ICompareContext } from "../compare/context";
import DroperText from "./DroperText";

const FindMyBrokerComponent: NextPage = () => {
  const [dropShowTool, setDropShowTool] = useState<boolean>(false);
  const [dropShowTopBrokers, setDropShowTopBrokers] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(0);
  const [matchingBroker, setMatchingBroker] = useState(brokers);

  const BackButton = () => {
    return (
      <button
        className='inline max-w-max cursor-pointer text-sm sm:text-base no-underline transition-all duration-75'
        style={{
          background:
            "linear-gradient(rgb(253, 173, 0) 0%, rgb(253, 173, 0) 100%) 0px 100% / 1px 1px repeat-x"
        }}
        onClick={decreaseCounter}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className='inline mb-px h-5 w-5 mr-2'
        >
          <path
            fillRule='evenodd'
            d='M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z'
            clipRule='evenodd'
          />
        </svg>
        <span>Back</span>
      </button>
    );
  };

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    if (counter >= 0) setCounter(counter - 1);
  };

  const familialityWithTradingAndInvesting = () => {
    increaseCounter();
  };

  const mostImportantAsset = () => {
    increaseCounter();
  };

  const brokerCharges = () => {
    increaseCounter();
  };

  const tradingAndNoneTradingFees = () => {
    increaseCounter();
  };

  const feesDiscountsAndOtherConditions = () => {
    increaseCounter();
  };

  const handleCompareBrokers = () => {
    increaseCounter();
  };

  return (
    <>
      <div className='flex justify-center items-center w-full h-20 sm:h-24 shadow-lg pb-0 sm:pb-6 pt-5 sm:pt-0 px-10 sm:px-20'>
        <div className='lg:w-[565px] w-full'>
          <div className='flex'>
            <div className='flex items-center relative mx-[6px] sm:mx-[8px] grow w-4/5'>
              <div className='absolute w-[16px] sm:w-[20px] h-[16px] sm:h-[20px] rounded-full z-20 text-white flex justify-center items-center text-sm left-[-24px] sm:left-[-28.8px] bg-secondary-500 border-8 border-secondary-50 border-opacity-90 box-content right-[-20.01px] sm:right-[-28px]'>
                <span className='hidden sm:block absolute text-xs sm:text-sm text-black text-center w-36 pt-20 font-bold'>
                  Basic Preferences <span className='font-normal'>6/1</span>
                </span>
              </div>
              <div className='relative w-full flex items-center'>
                <div className='w-full h-[3px] bg-secondary-100'></div>
                <div className='absolute w-[3px] h-[3px] rounded-full bg-secondary-500 right-0'></div>
              </div>
              <div className='relative w-full flex items-center'>
                <div className='w-full h-[3px] bg-secondary-100'></div>
                <div className='absolute w-[3px] h-[3px] rounded-full bg-secondary-500 right-0'></div>
              </div>
              <div className='relative w-full flex items-center'>
                <div className='w-full h-[3px] bg-secondary-100'></div>
                <div className='absolute w-[3px] h-[3px] rounded-full bg-secondary-500 right-0'></div>
              </div>
              <div className='relative w-full flex items-center'>
                <div className='w-full h-[3px] bg-secondary-100'></div>
                <div className='absolute w-[3px] h-[3px] rounded-full bg-secondary-500 right-0'></div>
              </div>
              <div className='relative w-full flex items-center'>
                <div className='w-full h-[3px] bg-secondary-100'></div>
                <div className='absolute w-[3px] h-[3px] rounded-full bg-secondary-500 right-0'></div>
              </div>
              <div className='relative w-full flex items-center'>
                <div className='w-full h-[3px] bg-secondary-100'></div>
                <div className='absolute w-[16px] sm:w-[20px] h-[16px] sm:h-[20px] rounded-full z-20 text-white flex justify-center items-center text-sm bg-white border border-gray-200 right-[-12px] sm:right-[-20px]'>
                  <span className='hidden sm:block absolute text-xs sm:text-sm text-black text-center w-36 pt-20'>
                    Fine-tuned Results{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className='flex items-center relative mx-[6px] sm:mx-[8px] w-1/5'>
              <div className='relative w-full flex items-center'>
                <div className='w-full h-[3px] bg-secondary-100'></div>
                <div className='absolute w-[3px] h-[3px] rounded-full bg-secondary-500 right-0'></div>
              </div>
              <div className='relative w-full flex items-center'>
                <div className='w-full h-[3px] bg-secondary-100'></div>
                <div className='absolute w-[16px] sm:w-[20px] h-[16px] sm:h-[20px] rounded-full z-20 text-white flex justify-center items-center text-sm bg-white border border-gray-200 right-[-12px] sm:right-[-20px]'>
                  <span className='hidden sm:block absolute text-xs sm:text-sm text-black text-center w-36 pt-20'>
                    Sign Up{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <span className='sm:hidden mt-6 flex justify-center font-bold text-xs'>
            Basic Preferences <span className='font-normal ml-1'>6/1</span>
          </span>
        </div>
      </div>
      <div className='w-full flex flex-col items-center'>
        <div className='flex flex-col lg:flex-row lg:justify-between items-center lg:items-start mt-3.5 sm:mt-8 relative w-11/12 lg:w-[954px]'>
          <div className='w-11/12 lg:w-[457px] pb-6 lg:pb-12 h-full border-b border-gray-200 sm:border-none mb-4 sm:mb-0'>
            <div
              className='w-[210px] h-[210px] hidden xl:block absolute left left-[-14rem] bg-contain bg-center bg-no-repeat'
              style={{
                backgroundImage: "url('/images/illustrations/worldwide.png')"
              }}
            ></div>
            <div>
              {counter === 0 && (
                <div className='w-11/12 lg:w-[457px] pb-6 lg:pb-12 h-full border-b border-gray-200 sm:border-none mb-4 sm:mb-0'>
                  <div
                    className='w-[210px] h-[210px] hidden xl:block absolute left left-[-14rem] bg-contain bg-center bg-no-repeat'
                    style={{
                      backgroundImage:
                        'url("/images/illustrations/worldwide.svg")'
                    }}
                  />
                  <div>
                    <div className='mb-4'>
                      <div className='flex flex-col gap-3 mb-4'>
                        <div className='font-extrabold text-2xl md:text-3xl'>
                          Get a personalized broker recommendation
                        </div>
                        <div className='w-full block text-l p-2 bg-secondary-50 rounded-lg'>
                          <div className='flex gap-2'>
                            <div className='inline my-auto'>
                              <div
                                className='w-[24px] h-[24px] bg-contain bg-center bg-no-repeat'
                                style={{
                                  backgroundImage:
                                    'url("/images/icons/bx-user-circle-gold.png")'
                                }}
                              />
                            </div>
                            <strong className='block'>
                              125,500 people already found a broker via this
                              tool!
                            </strong>
                          </div>
                        </div>
                        <p>
                          Your broker toplist will be selected based on your
                          answers.
                        </p>
                      </div>
                      <div className='w-full flex justify-between lg:justify-start items-center' />
                      <p className='font-bold text-2xl'>Where do you live?</p>
                      <div
                        className='has-tooltip inline-block cursor-pointer mt-2'
                        onMouseEnter={() => setDropShowTool(true)}
                        onMouseLeave={() => setDropShowTool(false)}
                      >
                        <span
                          className={`${
                            !dropShowTool && "hidden"
                          } tooltip absolute rounded shadow-lg p-3 text-red-500 mt-8 mx-4 max-w-xs bg-secondary-50 text-sm z-50`}
                        >
                          Online brokers usually provide their services in
                          several countries. Let’s start finding the best
                          brokers for you by looking at which ones are available
                          in your country of residence. You can change the
                          pre-selected location to any other country.
                        </span>
                        <div className='flex items-center text-secondary-500 text-sm'>
                          <div
                            className='w-4 h-4 mr-2 bg-contain bg-center bg-no-repeat'
                            style={{
                              backgroundImage:
                                'url("/images/icons/info_icon.svg")'
                            }}
                          />
                          More info
                        </div>
                      </div>
                    </div>
                    <div className='hidden lg:block mt-14'>
                      <div className='flex items-center relative w-max flex-col'>
                        <button
                          className='flex flex-row items-center justify-center font-medium uppercase tracking-wider cursor-pointer select-none shadow-bc hover:shadow-bcHover rounded-lg box-border whitespace-nowrap  text-sm h-8 sm:h-10 px-[13px] sm:px-[18px] bg-secondary-500 text-white'
                          type='button'
                          onClick={() => setCounter(1)}
                        >
                          Find the best broker for me
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            className='hidden lg:block ml-2 w-4 h-4'
                          >
                            <path
                              fillRule='evenodd'
                              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                              clipRule='evenodd'
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {counter === 1 && (
                <div className='w-11/12 lg:w-[457px] pb-6 lg:pb-12 h-full border-b border-gray-200 sm:border-none mb-4 sm:mb-0'>
                  <div>
                    <div className='mb-6 sm:mb-12'>
                      <div className='w-full flex justify-between lg:justify-start items-center mb-2'>
                        <BackButton />
                      </div>
                      <p className='sm:text-3xl font-bold text-2xl'>
                        How familiar are you with trading and investing?
                      </p>
                      <div
                        className={`has-tooltip inline-block cursor-pointer mt-2`}
                        onMouseEnter={() => setDropShowTool(true)}
                        onMouseLeave={() => setDropShowTool(false)}
                      >
                        <span
                          className={`${
                            !dropShowTool && "hidden"
                          } tooltip absolute rounded shadow-lg p-3 text-red-500 mt-8 mx-4 max-w-xs bg-secondary-50 text-sm z-50`}
                        >
                          Some brokers make it easy for new investors to start
                          their trading journey, while others offer fairly
                          complex services and tools aimed at more advanced
                          traders. Let's continue narrowing down our list of
                          suitable brokers by your level of experience.
                        </span>
                        <div className='flex items-center text-secondary-500 text-sm'>
                          <div
                            className='w-4 h-4 mr-2 bg-contain bg-center bg-no-repeat'
                            style={{
                              backgroundImage:
                                'url("/images/icons/info_icon.svg")'
                            }}
                          />
                          More info
                        </div>
                      </div>
                    </div>
                    <div>
                      <form className='flex flex-col space-y-4'>
                        <label className='flex items-center cursor-pointer select-none'>
                          <input
                            type='radio'
                            className='w-5 h-5 sm:w-6 sm:h-6 min-w-[1.25rem] sm:min-w-[1.5rem] cursor-pointer'
                            defaultValue={52}
                            name='trading-investing'
                          />
                          <div className='ml-4 sm:text-lg text-base'>
                            I am a <strong>first-timer</strong> with no
                            experience
                          </div>
                        </label>
                        <label className='flex items-center cursor-pointer select-none'>
                          <input
                            type='radio'
                            className='w-5 h-5 sm:w-6 sm:h-6 min-w-[1.25rem] sm:min-w-[1.5rem] cursor-pointer'
                            defaultValue={53}
                            name='trading-investing'
                          />
                          <div className='ml-4 sm:text-lg text-base'>
                            I've already made a few{" "}
                            <strong>simple transactions</strong>
                          </div>
                        </label>
                        <label className='flex items-center cursor-pointer select-none'>
                          <input
                            type='radio'
                            className='w-5 h-5 sm:w-6 sm:h-6 min-w-[1.25rem] sm:min-w-[1.5rem] cursor-pointer'
                            defaultValue={54}
                            name='trading-investing'
                          />
                          <div className='ml-4 sm:text-lg text-base'>
                            I <strong>have experience</strong> with various
                            products and different trading strategies
                          </div>
                        </label>
                        <label className='flex items-center cursor-pointer select-none'>
                          <input
                            type='radio'
                            className='w-5 h-5 sm:w-6 sm:h-6 min-w-[1.25rem] sm:min-w-[1.5rem] cursor-pointer'
                            defaultValue={55}
                            name='trading-investing'
                          />
                          <div className='ml-4 sm:text-lg text-base'>
                            I am a <strong>professional</strong> and fully
                            confident
                          </div>
                        </label>
                      </form>
                    </div>
                    <div className='hidden lg:block mt-14'>
                      <div className='flex items-center relative w-max flex-col'>
                        <button
                          className='flex flex-row items-center justify-center font-medium uppercase tracking-wider cursor-pointer select-none shadow-bc hover:shadow-bcHover rounded-lg box-border whitespace-nowrap  text-sm h-8 sm:h-10 px-[13px] sm:px-[18px] bg-secondary-500 text-white  border-opacity-25 hover:cursor-default hover:shadow-bc'
                          type='button'
                          onClick={familialityWithTradingAndInvesting}
                        >
                          Next
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            className='hidden lg:block ml-2 w-4 h-4'
                          >
                            <path
                              fillRule='evenodd'
                              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                              clipRule='evenodd'
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {counter === 2 && (
                <div className='w-11/12 lg:w-[457px] pb-6 lg:pb-12 h-full border-b border-gray-200 sm:border-none mb-4 sm:mb-0'>
                  <div>
                    <div className='mb-6 sm:mb-12'>
                      <div className='w-full flex justify-between lg:justify-start items-center mb-2'>
                        <BackButton />
                      </div>
                      <p className='sm:text-3xl font-bold text-2xl'>
                        Choose the most important assets for you!
                      </p>
                      <div
                        className='has-tooltip inline-block cursor-pointer mt-2'
                        onMouseEnter={() => setDropShowTool(true)}
                        onMouseLeave={() => setDropShowTool(false)}
                      >
                        <span
                          className={`${
                            !dropShowTool && "hidden"
                          } tooltip absolute rounded shadow-lg p-3 text-red-500 mt-8 mx-4 max-w-xs bg-secondary-50 text-sm z-50`}
                        >
                          Not all brokers offer every kind of trading asset, so
                          your options depend largely on the broker you choose.
                          Select one or more products that are the most
                          important for you.
                        </span>
                        <div className='flex items-center text-secondary-500 text-sm'>
                          <div
                            className='w-4 h-4 mr-2 bg-contain bg-center bg-no-repeat'
                            style={{
                              backgroundImage:
                                'url("/images/icons/info_icon.svg")'
                            }}
                          />
                          More info
                        </div>
                      </div>
                    </div>
                    <div>
                      <form className='flex flex-col'>
                        <label>
                          <div className='flex items-center mt-4 cursor-pointer sm:text-lg text-base'>
                            <input
                              type='checkbox'
                              className='w-5 h-5 sm:w-6 sm:h-6 min-w-[1.25rem] sm:min-w-[1.5rem] border-secondary-500'
                            />
                            <div className='ml-4'>
                              <div>
                                Stocks and ETFs (e.g. Apple or Tesla shares)
                              </div>
                            </div>
                          </div>
                        </label>
                        <label>
                          <div className='flex items-center mt-4 cursor-pointer sm:text-lg text-base'>
                            <input
                              type='checkbox'
                              className='w-5 h-5 sm:w-6 sm:h-6 min-w-[1.25rem] sm:min-w-[1.5rem] border-secondary-500'
                            />
                            <div className='ml-4'>
                              <div>Forex (e.g. EURUSD or GBPUSD)</div>
                            </div>
                          </div>
                        </label>
                        <label>
                          <div className='flex items-center mt-4 cursor-pointer sm:text-lg text-base'>
                            <input
                              type='checkbox'
                              className='w-5 h-5 sm:w-6 sm:h-6 min-w-[1.25rem] sm:min-w-[1.5rem] border-secondary-500'
                            />
                            <div className='ml-4'>
                              <div>
                                Options and futures (e.g. SPDR S&amp;P 500 ETF
                                Trust or Invesco QQQ Trust)
                              </div>
                            </div>
                          </div>
                        </label>
                        <label>
                          <div className='flex items-center mt-4 cursor-pointer sm:text-lg text-base'>
                            <input
                              type='checkbox'
                              className='w-5 h-5 sm:w-6 sm:h-6 min-w-[1.25rem] sm:min-w-[1.5rem] border-secondary-500'
                            />
                            <div className='ml-4'>
                              <div>
                                Funds (e.g. BlackRock Equity Dividend Fund)
                              </div>
                            </div>
                          </div>
                        </label>
                        <label>
                          <div className='flex items-center mt-4 cursor-pointer sm:text-lg text-base'>
                            <input
                              type='checkbox'
                              className='w-5 h-5 sm:w-6 sm:h-6 min-w-[1.25rem] sm:min-w-[1.5rem] border-secondary-500'
                            />
                            <div className='ml-4'>
                              <div>CFDs (e.g. Apple share CFD)</div>
                            </div>
                          </div>
                        </label>
                        <label>
                          <div className='flex items-center mt-4 cursor-pointer sm:text-lg text-base'>
                            <input
                              type='checkbox'
                              className='w-5 h-5 sm:w-6 sm:h-6 min-w-[1.25rem] sm:min-w-[1.5rem] border-secondary-500'
                            />
                            <div className='ml-4'>
                              <div>Cryptos (e.g. Bitcoin or Ethereum)</div>
                            </div>
                          </div>
                        </label>
                        <label>
                          <div className='flex items-center mt-4 cursor-pointer sm:text-lg text-base'>
                            <input
                              type='checkbox'
                              className='w-5 h-5 sm:w-6 sm:h-6 min-w-[1.25rem] sm:min-w-[1.5rem] border-secondary-500'
                            />
                            <div className='ml-4'>
                              <div>I don't know</div>
                            </div>
                          </div>
                        </label>
                      </form>
                    </div>
                    <div className='hidden lg:block mt-14'>
                      <div className='flex items-center relative w-max flex-col'>
                        <button
                          className='flex flex-row items-center justify-center font-medium uppercase tracking-wider cursor-pointer select-none shadow-bc hover:shadow-bcHover rounded-lg box-border whitespace-nowrap  text-sm h-8 sm:h-10 px-[13px] sm:px-[18px] bg-secondary-500 text-white border-opacity-25 hover:cursor-default hover:shadow-bc'
                          type='button'
                          onClick={mostImportantAsset}
                        >
                          Next
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            className='hidden lg:block ml-2 w-4 h-4'
                          >
                            <path
                              fillRule='evenodd'
                              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                              clipRule='evenodd'
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {counter === 3 && (
                <div className='w-11/12 lg:w-[457px] pb-6 lg:pb-12 h-full border-b border-gray-200 sm:border-none mb-4 sm:mb-0'>
                  <div>
                    <div className='mb-6 sm:mb-12'>
                      <div className='w-full flex justify-between lg:justify-start items-center mb-2'>
                        <BackButton />
                      </div>
                      <p className='sm:text-3xl font-bold text-2xl'>
                        Brokers charge fees, not just for trading. How cost
                        conscious are you?
                      </p>
                      <div
                        className='has-tooltip inline-block cursor-pointer mt-2'
                        onMouseEnter={() => setDropShowTool(true)}
                        onMouseLeave={() => setDropShowTool(false)}
                      >
                        <span
                          className={`${
                            !dropShowTool && "hidden"
                          } tooltip absolute rounded shadow-lg p-3 text-red-500 mt-8 mx-4 max-w-xs bg-secondary-50 text-sm z-50`}
                        >
                          Are you looking for a broker that offers a full range
                          of services or do you prefer limited-service, but
                          cheaper discount brokers? Let's narrow down the target
                          list some more!
                        </span>
                        <div className='flex items-center text-secondary-500 text-sm'>
                          <div
                            className='w-4 h-4 mr-2 bg-contain bg-center bg-no-repeat'
                            style={{
                              backgroundImage:
                                'url("/images/icons/info_icon.svg")'
                            }}
                          />
                          More info
                        </div>
                      </div>
                    </div>
                    <div>
                      <form className='flex flex-col space-y-4'>
                        <label className='flex items-center cursor-pointer select-none'>
                          <input
                            type='radio'
                            className='w-5 h-5 sm:w-6 sm:h-6 min-w-[1.25rem] sm:min-w-[1.5rem] cursor-pointer'
                            defaultValue={63}
                            name='broker-charges-fee'
                          />
                          <div className='ml-4 sm:text-lg text-base'>
                            I'm fine with reasonable fees if the{" "}
                            <strong>services are exceptional</strong>
                          </div>
                        </label>
                        <label className='flex items-center cursor-pointer select-none'>
                          <input
                            type='radio'
                            className='w-5 h-5 sm:w-6 sm:h-6 min-w-[1.25rem] sm:min-w-[1.5rem] cursor-pointer'
                            defaultValue={64}
                            name='broker-charges-fee'
                          />
                          <div className='ml-4 sm:text-lg text-base'>
                            I want to <strong>pay as little as possible</strong>{" "}
                            in fees, I only need basic functions
                          </div>
                        </label>
                        <label className='flex items-center cursor-pointer select-none'>
                          <input
                            type='radio'
                            className='w-5 h-5 sm:w-6 sm:h-6 min-w-[1.25rem] sm:min-w-[1.5rem] cursor-pointer'
                            defaultValue={65}
                            name='broker-charges-fee'
                          />
                          <div className='ml-4 sm:text-lg text-base'>
                            I want a <strong>zero-commission</strong> broker, I
                            only want to pay what's absolutely necessary
                          </div>
                        </label>
                        <label className='flex items-center cursor-pointer select-none'>
                          <input
                            type='radio'
                            className='w-5 h-5 sm:w-6 sm:h-6 min-w-[1.25rem] sm:min-w-[1.5rem] cursor-pointer'
                            defaultValue={66}
                            name='broker-charges-fee'
                          />
                          <div className='ml-4 sm:text-lg text-base'>
                            I don't know
                          </div>
                        </label>
                      </form>
                    </div>
                    <div className='hidden lg:block mt-14'>
                      <div className='flex items-center relative w-max flex-col'>
                        <button
                          className='flex flex-row items-center justify-center font-medium uppercase tracking-wider cursor-pointer select-none shadow-bc hover:shadow-bcHover rounded-lg box-border whitespace-nowrap  text-sm h-8 sm:h-10 px-[13px] sm:px-[18px] bg-secondary-500 text-white bg-opacity-60 border-opacity-25 hover:cursor-default hover:shadow-bc'
                          type='button'
                          onClick={brokerCharges}
                        >
                          Next
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            className='hidden lg:block ml-2 w-4 h-4'
                          >
                            <path
                              fillRule='evenodd'
                              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                              clipRule='evenodd'
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {counter === 4 && (
                <div className='w-11/12 lg:w-[457px] pb-6 lg:pb-12 h-full border-b border-gray-200 sm:border-none mb-4 sm:mb-0'>
                  <div>
                    <div className='mb-6 sm:mb-12'>
                      <div className='w-full flex justify-between lg:justify-start items-center mb-2'>
                        <BackButton />
                      </div>
                      <p className='sm:text-3xl font-bold text-2xl'>
                        How often do you want to deal with your investments and
                        trades?
                      </p>
                      <div
                        className='has-tooltip inline-block cursor-pointer mt-2'
                        onMouseEnter={() => setDropShowTool(true)}
                        onMouseLeave={() => setDropShowTool(false)}
                      >
                        <span
                          className={`${
                            !dropShowTool && "hidden"
                          } tooltip absolute rounded shadow-lg p-3 text-red-500 mt-8 mx-4 max-w-xs bg-secondary-50 text-sm z-50`}
                        >
                          Trading and non-trading fees, as well as trading
                          tools, vary from broker to broker, therefore a lot
                          depends on how often you will place orders. Let's
                          continue cutting down our broker list based on your
                          planned trading activity.
                        </span>
                        <div className='flex items-center text-secondary-500 text-sm'>
                          <div
                            className='w-4 h-4 mr-2 bg-contain bg-center bg-no-repeat'
                            style={{
                              backgroundImage:
                                'url("/images/icons/info_icon.svg")'
                            }}
                          />
                          More info
                        </div>
                      </div>
                    </div>
                    <div>
                      <form className='flex flex-col space-y-4'>
                        <label className='flex items-center cursor-pointer select-none'>
                          <input
                            type='radio'
                            className='w-5 h-5 sm:w-6 sm:h-6 min-w-[1.25rem] sm:min-w-[1.5rem] cursor-pointer'
                            defaultValue={67}
                            name='trading-fees'
                          />
                          <div className='ml-4 sm:text-lg text-base'>Daily</div>
                        </label>
                        <label className='flex items-center cursor-pointer select-none'>
                          <input
                            type='radio'
                            className='w-5 h-5 sm:w-6 sm:h-6 min-w-[1.25rem] sm:min-w-[1.5rem] cursor-pointer'
                            defaultValue={68}
                            name='trading-fees'
                          />
                          <div className='ml-4 sm:text-lg text-base'>
                            Weekly
                          </div>
                        </label>
                        <label className='flex items-center cursor-pointer select-none'>
                          <input
                            type='radio'
                            className='w-5 h-5 sm:w-6 sm:h-6 min-w-[1.25rem] sm:min-w-[1.5rem] cursor-pointer'
                            defaultValue={69}
                            name='trading-fees'
                          />
                          <div className='ml-4 sm:text-lg text-base'>
                            Monthly
                          </div>
                        </label>
                        <label className='flex items-center cursor-pointer select-none'>
                          <input
                            type='radio'
                            className='w-5 h-5 sm:w-6 sm:h-6 min-w-[1.25rem] sm:min-w-[1.5rem] cursor-pointer'
                            defaultValue={70}
                            name='trading-fees'
                          />
                          <div className='ml-4 sm:text-lg text-base'>
                            Yearly
                          </div>
                        </label>
                        <label className='flex items-center cursor-pointer select-none'>
                          <input
                            type='radio'
                            className='w-5 h-5 sm:w-6 sm:h-6 min-w-[1.25rem] sm:min-w-[1.5rem] cursor-pointer'
                            defaultValue={71}
                            name='trading-fees'
                          />
                          <div className='ml-4 sm:text-lg text-base'>
                            I don't know
                          </div>
                        </label>
                      </form>
                    </div>
                    <div className='hidden lg:block mt-14'>
                      <div className='flex items-center relative w-max flex-col'>
                        <button
                          className='flex flex-row items-center justify-center font-medium uppercase tracking-wider cursor-pointer select-none shadow-bc hover:shadow-bcHover rounded-lg box-border whitespace-nowrap  text-sm h-8 sm:h-10 px-[13px] sm:px-[18px] bg-secondary-500 text-white bg-opacity-60 border-opacity-25 hover:cursor-default hover:shadow-bc'
                          type='button'
                          onClick={tradingAndNoneTradingFees}
                        >
                          Next
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            className='hidden lg:block ml-2 w-4 h-4'
                          >
                            <path
                              fillRule='evenodd'
                              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                              clipRule='evenodd'
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {counter === 5 && (
                <div className='w-11/12 lg:w-[457px] pb-6 lg:pb-12 h-full border-b border-gray-200 sm:border-none mb-4 sm:mb-0'>
                  <div>
                    <div className='mb-6 sm:mb-12'>
                      <div className='w-full flex justify-between lg:justify-start items-center mb-2'>
                        <BackButton />
                      </div>
                      <p className='sm:text-3xl font-bold text-2xl'>
                        How much money would you like to deposit?
                      </p>
                      <div
                        className='has-tooltip inline-block cursor-pointer mt-2'
                        onMouseEnter={() => setDropShowTool(true)}
                        onMouseLeave={() => setDropShowTool(false)}
                      >
                        <span
                          className={`${
                            !dropShowTool && "hidden"
                          } tooltip absolute rounded shadow-lg p-3 text-red-500 mt-8 mx-4 max-w-xs bg-secondary-50 text-sm z-50`}
                        >
                          Fees, discounts and other conditions of the various
                          brokers depend in large part on the size of your
                          trading activity. Let's fine-tune your results some
                          more with the average amount you plan to trade in a
                          month.
                        </span>
                        <div className='flex items-center text-secondary-500 text-sm'>
                          <div
                            className='w-4 h-4 mr-2 bg-contain bg-center bg-no-repeat'
                            style={{
                              backgroundImage:
                                'url("/images/icons/info_icon.svg")'
                            }}
                          />
                          More info
                        </div>
                      </div>
                    </div>
                    <div>
                      <form className='flex flex-col space-y-4'>
                        <label className='flex items-center cursor-pointer select-none'>
                          <input
                            type='radio'
                            className='w-5 h-5 sm:w-6 sm:h-6 min-w-[1.25rem] sm:min-w-[1.5rem] cursor-pointer'
                            defaultValue={72}
                            name='fees-discounts-and-conditions'
                          />
                          <div className='ml-4 sm:text-lg text-base'>
                            Less than $50
                          </div>
                        </label>
                        <label className='flex items-center cursor-pointer select-none'>
                          <input
                            type='radio'
                            className='w-5 h-5 sm:w-6 sm:h-6 min-w-[1.25rem] sm:min-w-[1.5rem] cursor-pointer'
                            defaultValue={73}
                            name='fees-discounts-and-conditions'
                          />
                          <div className='ml-4 sm:text-lg text-base'>
                            $51 - $200
                          </div>
                        </label>
                        <label className='flex items-center cursor-pointer select-none'>
                          <input
                            type='radio'
                            className='w-5 h-5 sm:w-6 sm:h-6 min-w-[1.25rem] sm:min-w-[1.5rem] cursor-pointer'
                            defaultValue={74}
                            name='fees-discounts-and-conditions'
                          />
                          <div className='ml-4 sm:text-lg text-base'>
                            $201 - $500
                          </div>
                        </label>
                        <label className='flex items-center cursor-pointer select-none'>
                          <input
                            type='radio'
                            className='w-5 h-5 sm:w-6 sm:h-6 min-w-[1.25rem] sm:min-w-[1.5rem] cursor-pointer'
                            defaultValue={75}
                            name='fees-discounts-and-conditions'
                          />
                          <div className='ml-4 sm:text-lg text-base'>
                            $501 - $1,000
                          </div>
                        </label>
                        <label className='flex items-center cursor-pointer select-none'>
                          <input
                            type='radio'
                            className='w-5 h-5 sm:w-6 sm:h-6 min-w-[1.25rem] sm:min-w-[1.5rem] cursor-pointer'
                            defaultValue={76}
                            name='fees-discounts-and-conditions'
                          />
                          <div className='ml-4 sm:text-lg text-base'>
                            $1,001 - $2,000
                          </div>
                        </label>
                        <label className='flex items-center cursor-pointer select-none'>
                          <input
                            type='radio'
                            className='w-5 h-5 sm:w-6 sm:h-6 min-w-[1.25rem] sm:min-w-[1.5rem] cursor-pointer'
                            defaultValue={77}
                            name='fees-discounts-and-conditions'
                          />
                          <div className='ml-4 sm:text-lg text-base'>
                            More than $2,000
                          </div>
                        </label>
                        <label className='flex items-center cursor-pointer select-none'>
                          <input
                            type='radio'
                            className='w-5 h-5 sm:w-6 sm:h-6 min-w-[1.25rem] sm:min-w-[1.5rem] cursor-pointer'
                            defaultValue={78}
                            name='fees-discounts-and-conditions'
                          />
                          <div className='ml-4 sm:text-lg text-base'>
                            I don't know
                          </div>
                        </label>
                      </form>
                    </div>
                    <div className='hidden lg:block mt-14'>
                      <div className='flex items-center relative w-max flex-col'>
                        <button
                          className='flex flex-row items-center justify-center font-medium tracking-wider cursor-pointer select-none shadow-bc hover:shadow-bcHover rounded-lg box-border whitespace-nowrap  text-sm h-8 sm:h-10 px-[13px] sm:px-[18px] bg-secondary-500 text-white bg-opacity-60 border-opacity-25 hover:cursor-default hover:shadow-bc'
                          type='button'
                          onClick={feesDiscountsAndOtherConditions}
                        >
                          Next
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            className='hidden lg:block ml-2 w-4 h-4'
                          >
                            <path
                              fillRule='evenodd'
                              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                              clipRule='evenodd'
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {counter === 6 && (
                <div className='w-11/12 lg:w-[457px] pb-6 lg:pb-12 h-full border-b border-gray-200 sm:border-none mb-4 sm:mb-0'>
                  <div>
                    <div className='mb-6 sm:mb-12'>
                      <div className='w-full flex justify-between lg:justify-start items-center mb-2'>
                        <BackButton />
                        <a
                          className='max-w-max cursor-pointer text-sm sm:text-base no-underline transition-all duration-75 flex items-center lg:hidden'
                          style={{
                            background:
                              "linear-gradient(rgb(253, 173, 0) 0%, rgb(253, 173, 0) 100%) 0px 100% / 1px 1px repeat-x"
                          }}
                        >
                          <div
                            className='mb-px h-5 w-5 mr-2 bg-contain bg-center bg-no-repeat'
                            style={{
                              backgroundImage:
                                'url("/images/icons/restart.png")'
                            }}
                          />
                          <span>Restart your calculation</span>
                        </a>
                      </div>
                      <p className='sm:text-3xl font-bold text-2xl'>Ta-da!</p>
                      <p className='text-l sm:text-xl font-bold'>
                        Here are our Tailored Results for you.
                      </p>
                      <div
                        className='has-tooltip inline-block cursor-pointer mt-2'
                        onMouseEnter={() => setDropShowTool(true)}
                        onMouseLeave={() => setDropShowTool(false)}
                      >
                        <span
                          className={`${
                            !dropShowTool && "hidden"
                          } tooltip absolute rounded shadow-lg p-3 text-red-500 mt-8 mx-4 max-w-xs bg-secondary-50 text-sm z-50`}
                        >
                          You can compare your top 2 recommended brokers in
                          detail. Comparing might help you decide which suits
                          you more.
                        </span>
                        <div className='flex items-center text-secondary-500 text-sm'>
                          <div
                            className='w-4 h-4 mr-2 bg-contain bg-center bg-no-repeat'
                            style={{
                              backgroundImage:
                                'url("/images/icons/info_icon.svg")'
                            }}
                          />
                          More info
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col items-center'>
                      <div className='flex w-full justify-around relative'>
                        <div className='flex flex-col items-center z-20'>
                          <div className='flex items-center flex-col'>
                            <div className='flex items-center flex-col'>
                              <span>
                                <Link
                                  href={
                                    matchingBroker[0].broker_details.broker_link
                                  }
                                  rel='noreferrer nofollow'
                                  target='_blank'
                                >
                                  <div
                                    className='shadow-lg rounded-md w-10 h-10 sm:w-12 sm:h-12 hover:opacity-80 bg-contain bg-center bg-no-repeat'
                                    style={{
                                      backgroundImage: `url("${matchingBroker[0].broker_details.broker_logo}")`
                                    }}
                                  />
                                </Link>
                              </span>
                              <div className='flex flex-col items-center mt-2 sm:mt-4'>
                                <span>
                                  <Link
                                    href={
                                      matchingBroker[0].broker_details
                                        .broker_link
                                    }
                                    rel='noreferrer nofollow'
                                    target='_blank'
                                  >
                                    <strong className='text-base text-center sm:text-lg font-bold hover:text-primary-500'>
                                      {matchingBroker[0].broker_details.name}
                                    </strong>
                                  </Link>
                                </span>
                                <Score
                                  score={matchingBroker[0].broker_details.score}
                                  className='relative max-h-4'
                                />
                              </div>
                            </div>
                            <div className='flex flex-col items-center mt-7 sm:mt-8'>
                              <div>
                                <div className='flex items-center relative w-max flex-col'>
                                  <a
                                    className='flex flex-row items-center justify-center font-medium uppercase tracking-wider cursor-pointer select-none shadow-bc hover:shadow-bcHover rounded-lg box-border whitespace-nowrap  text-xs sm:text-sm h-6 sm:h-8 px-[9px] sm:px-[13px] bg-secondary-500 text-white bc-link-no-decor'
                                    rel='noreferrer nofollow'
                                    target='_blank'
                                    href={
                                      matchingBroker[0].broker_details
                                        .broker_link
                                    }
                                  >
                                    Visit broker
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
                                      viewBox='0 0 20 20'
                                      fill='currentColor'
                                      className='w-3 h-3'
                                    >
                                      <path
                                        fillRule='evenodd'
                                        d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                                        clipRule='evenodd'
                                      />
                                    </svg>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='flex flex-col items-center z-20'>
                          <div className='flex items-center flex-col'>
                            <div className='flex items-center flex-col'>
                              <span>
                                <Link
                                  href={
                                    matchingBroker[1].broker_details.broker_link
                                  }
                                  rel='noreferrer nofollow'
                                  target='_blank'
                                >
                                  <div
                                    className='shadow-lg rounded-md w-10 h-10 sm:w-12 sm:h-12 hover:opacity-80 bg-contain bg-center bg-no-repeat'
                                    style={{
                                      backgroundImage: `url(${matchingBroker[1].broker_details.broker_logo})`
                                    }}
                                  />
                                </Link>
                              </span>
                              <div className='flex flex-col items-center mt-2 sm:mt-4'>
                                <span>
                                  <Link
                                    href={
                                      matchingBroker[1].broker_details
                                        .broker_link
                                    }
                                    rel='noreferrer nofollow'
                                    target='_blank'
                                  >
                                    <strong className='text-base text-center sm:text-lg font-bold hover:text-primary-500'>
                                      {matchingBroker[1].broker_details.name}
                                    </strong>
                                  </Link>
                                </span>
                                <Score
                                  score={matchingBroker[1].broker_details.score}
                                  className='relative max-h-4'
                                />
                              </div>
                            </div>
                            <div className='flex flex-col items-center mt-7 sm:mt-8'>
                              <div>
                                <div className='flex items-center relative w-max flex-col'>
                                  <a
                                    className='flex flex-row items-center justify-center font-medium uppercase tracking-wider cursor-pointer select-none shadow-bc hover:shadow-bcHover rounded-lg box-border whitespace-nowrap  text-xs sm:text-sm h-6 sm:h-8 px-[9px] sm:px-[13px] bg-secondary-500 text-white bc-link-no-decor'
                                    rel='noreferrer nofollow'
                                    target='_blank'
                                    href={
                                      matchingBroker[1].broker_details
                                        .broker_link
                                    }
                                  >
                                    Visit broker
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
                                      viewBox='0 0 20 20'
                                      fill='currentColor'
                                      className='w-3 h-3'
                                    >
                                      <path
                                        fillRule='evenodd'
                                        d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                                        clipRule='evenodd'
                                      />
                                    </svg>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='w-full absolute flex justify-center items center z-10'>
                          <div
                            className='w-[72px] h-[80px] sm:w-[118px] sm:h-[132px] absolute bg-contain bg-center bg-no-repeat'
                            style={{
                              backgroundImage:
                                'url("/images/icons/vs_icon.png")'
                            }}
                          />
                        </div>
                      </div>
                      <div className='mt-11 sm:mt-14'>
                        <div className='flex flex-col items-center w-max'>
                          <div
                            className='flex items-center relative w-max flex-col'
                            onClick={handleCompareBrokers}
                          >
                            <a
                              href={`${window.location.origin}/compare?brokers=${matchingBroker[0].broker_id}%2C${matchingBroker[1].broker_id}`}
                              target='_blank'
                              rel='noreferrer'
                            >
                              <span className='flex flex-row items-center justify-center font-medium uppercase tracking-wider cursor-pointer select-none shadow-bc hover:shadow-bcHover rounded-lg box-border whitespace-nowrap  text-sm h-8 sm:h-10 px-[13px] sm:px-[18px] bg-secondary-500 text-white'>
                                Compare these brokers
                              </span>
                            </a>
                            <p className='text-2xs sm:text-xs text-center max-w-[10rem] mt-3 sm:mt-4'>
                              Compare them to see which is the better fit for
                              you.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {counter === 7 && (
                <div className='w-11/12 lg:w-[457px] pb-6 lg:pb-12 h-full border-b border-gray-200 sm:border-none mb-4 sm:mb-0'>
                  <div
                    className='w-[210px] h-[210px] hidden xl:block absolute left left-[-14rem] bg-contain bg-center bg-no-repeat'
                    style={{
                      backgroundImage:
                        'url("/images/illustrations/announcement.svg")'
                    }}
                  />
                  <div>
                    <div className='mb-6 sm:mb-12'>
                      <div className='w-full flex justify-between lg:justify-start items-center mb-2'>
                        <BackButton />
                        <a
                          className='max-w-max cursor-pointer text-sm sm:text-base no-underline transition-all duration-75 flex items-center lg:hidden'
                          style={{
                            background:
                              "linear-gradient(rgb(253, 173, 0) 0%, rgb(253, 173, 0) 100%) 0px 100% / 1px 1px repeat-x"
                          }}
                        >
                          <div
                            className='mb-px h-5 w-5 mr-2 bg-contain bg-center bg-no-repeat'
                            style={{
                              backgroundImage:
                                'url("/images/icons/restart.png")'
                            }}
                          />
                          <span>Restart your calculation</span>
                        </a>
                      </div>
                      <p className='sm:text-3xl font-bold text-2xl'>
                        Save your list!
                      </p>
                      <div
                        className='has-tooltip inline-block cursor-pointer mt-2'
                        onMouseEnter={() => setDropShowTool(true)}
                        onMouseLeave={() => setDropShowTool(false)}
                      >
                        <span
                          className={`${
                            !dropShowTool && "hidden"
                          } tooltip absolute rounded shadow-lg p-3 text-red-500 mt-8 mx-4 max-w-xs bg-secondary-50 text-sm z-50`}
                        >
                          We don't have a registration facility at the moment,
                          but you can still save your calculation. Please
                          provide your contact details and we will send your
                          results in an email. You can save your results several
                          times, if you make several different calculations.
                        </span>
                        <div className='flex items-center text-secondary-500 text-sm'>
                          <div
                            className='w-4 h-4 mr-2 bg-contain bg-center bg-no-repeat'
                            style={{
                              backgroundImage:
                                'url("/images/icons/info_icon.svg")'
                            }}
                          />
                          More info
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className='mb-9'>
                        Sign up and we’ll send your tailored broker
                        recommendation list in email so you can dig deeper
                        later.
                      </div>
                      <div>
                        <div>
                          <div className='relative'>
                            <input
                              type='text'
                              className='border w-full rounded pl-4 py-1 outline-none text-xs sm:text-base h-10 text-gray-500 border-gray-400 pr-4'
                              name='input'
                              placeholder='Write your name here'
                              autoComplete='off'
                            />
                          </div>
                        </div>
                        <div className='mt-9'>
                          <div className='relative'>
                            <input
                              type='text'
                              className='border w-full rounded pl-4 py-1 outline-none text-xs sm:text-base h-10 text-gray-500 border-gray-400 pr-4'
                              name='input'
                              placeholder='Write your email address here'
                              autoComplete='off'
                            />
                          </div>
                        </div>
                        <div className='flex mt-8 text-xs sm:text-sm items-start'>
                          <input
                            type='checkbox'
                            className='mt-1 border-secondary-500'
                          />
                          <div className='ml-4'>
                            <p>
                              I acknoweldge and agree that my personal data will
                              be used in accordance with the{" "}
                              <a
                                href='https://www.iubenda.com/privacy-policy/8253309/full-legal'
                                className='text-secondary-500 hover:text-secondary-300 '
                              >
                                Privacy Policy
                              </a>{" "}
                              and Top5Brokers can contact me with brokerage
                              related emails
                            </p>
                          </div>
                        </div>
                        <button
                          className='flex flex-row items-center justify-center font-medium uppercase tracking-wider cursor-pointer select-none shadow-bc hover:shadow-bcHover rounded-lg box-border whitespace-nowrap  text-sm h-8 sm:h-10 px-[13px] sm:px-[18px] bg-secondary-500 text-white mt-8 w-full bg-opacity-60 border-opacity-25 hover:cursor-default hover:shadow-bc'
                          type='button'
                        >
                          Sign me up
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className='w-11/12 lg:w-[457px] pb-6  lg:pb-12 h-full'>
            <div>
              <div className='flex items-center pb-7 sm:pb-4'>
                <div className='text-lg sm:text-2xl font-bold'>
                  Your broker toplist
                </div>
                <div className='has-tooltip inline-block cursor-pointer ml-4'>
                  <span
                    className={`${
                      dropShowTopBrokers ? "" : "hidden"
                    } tooltip absolute rounded shadow-lg p-3 mt-8 mx-4 max-w-xs bg-secondary-50 text-sm z-50`}
                  >
                    We picked these 5 brokers for you based on the decades-long
                    experience of our team. We rate and review brokers along
                    almost 500 criteria to make it easier for investors like you
                    to find a suitable broker. We use these same criteria to
                    suggest what we believe are the best options for you. All of
                    these brokers are considered safe for investors.
                  </span>
                  <div
                    className='w-4 h-4 mr-2 bg-contain bg-center bg-no-repeat'
                    style={{
                      backgroundImage: "url('/images/icons/info_icon.svg')"
                    }}
                    onMouseEnter={() => setDropShowTopBrokers(true)}
                    onMouseLeave={() => setDropShowTopBrokers(false)}
                  ></div>
                </div>
              </div>
              {matchingBroker.slice(0, 5).map((broker, index) => (
                <div
                  className='flex flex-col sm:flex-row items-center sm:items-stretch sm:i py-4 border-t last:border-b border-primary-200 sm:border-gray-200'
                  key={broker.broker_id}
                >
                  <div
                    className={`w-12 sm:w-7 h-4 sm:min-h-[60px] sm:h-auto flex sm:flex-col items-center justify-center rounded-full overflow-hidden bg-color font-bold ${
                      index < 2 ? "bg-primary-200" : "bg-gray-200"
                    } absolute sm:relative mr-4 -mt-6 sm:mt-0 p-2 px-4`}
                  >
                    <p className='text-2xs'>TOP</p>
                    <p className='text-2xs sm:text-lg ml-1 sm:ml-0'>
                      {index + 1}
                    </p>
                  </div>
                  <div className='flex flex-col items-center w-full justify-center z-20'>
                    <div className='flex items-center w-full justify-between'>
                      <div className='flex items-center'>
                        <a
                          href='https://brokerchooser.com/go-to-broker/interactive-brokers/open-account?measurementCategory=01fmybro%2F02notrel%2F03notrel&amp;measurementList=top-5-list-visit-broker-btn-logo'
                          rel='noreferrer nofollow'
                          target='_blank'
                        >
                          <div
                            className='shadow-lg rounded-md w-10 h-10 sm:w-12 sm:h-12 hover:opacity-80 bg-contain bg-center bg-no-repeat'
                            style={{
                              backgroundImage: `url(${broker.broker_details.broker_logo})`
                            }}
                          ></div>
                        </a>
                        <div className='ml-4'>
                          <a
                            href='https://brokerchooser.com/go-to-broker/interactive-brokers/open-account?measurementCategory=01fmybro%2F02notrel%2F03notrel&amp;measurementList=top-5-list-visit-broker-btn-name-link'
                            rel='noreferrer nofollow'
                            target='_blank'
                          >
                            <strong className='text-base text-center sm:text-lg font-bold hover:text-primary-500'>
                              {broker.broker_details.name}
                            </strong>
                          </a>
                          <div className='flex items-center'>
                            <Score score={broker.broker_details.score} />
                          </div>
                        </div>
                      </div>
                      <div className='flex flex-col items-center'>
                        <div className='flex items-center relative w-max flex-col'>
                          <Link
                            href={broker.broker_details.broker_link}
                            target='_blank'
                          >
                            <div className='flex flex-row items-center justify-center font-medium uppercase tracking-wider cursor-pointer select-none shadow-bc hover:shadow-bcHover rounded-lg box-border whitespace-nowrap text-xs sm:text-sm h-6 sm:h-8 px-[9px] sm:px-[13px] bg-secondary-500 text-white'>
                              Visit broker
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                className='w-3 h-3'
                              >
                                <path
                                  fillRule='evenodd'
                                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                                  clipRule='evenodd'
                                ></path>
                              </svg>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row lg:justify-between items-center lg:items-start w-11/12 lg:w-[954px] border-0 lg:border-t border-gray-200 lg:pt-10'>
          <div className='w-11/12 lg:w-[457px] pb-6 lg:pb-12 h-full'>
            <DroperText />
          </div>
          <div className='w-11/12 lg:w-[457px] pb-6 lg:pb-12 h-full'>
            <div className='flex'>
              <div className='border-r-2 border-gray-300 items-start pr-4 pt-1 hidden sm:flex mr-4'>
                <div
                  className='w-5 h-5 bg-contain bg-center bg-no-repeat'
                  style={{
                    backgroundImage: "url('/images/icons/info_icon.svg')"
                  }}
                ></div>
              </div>
              <div>
                <h2 className='text-l sm:text-xl font-bold mb-4'>
                  How we rate brokers
                </h2>
                <p className='leading-7 text-sm sm:text-base'>
                  Our goal is to help you find the right online broker by
                  bringing clarity to the process. Everything you find on
                  Top5Brokers is based on reliable data and unbiased
                  information. We revise our methodology regularly, fine-tuning
                  all our criteria to be able to perfectly evaluate any broker
                  service.
                </p>
                <ul className='list-outside m-2 pl-2 list-disc flex flex-col sm:flex-wrap sm:h-24 mb-5'>
                  <li className='mt-3 sm:mt-4 text-primary-500'>
                    <span className='text-black text-sm sm:text-base font-bold'>
                      collected first hand
                    </span>
                  </li>
                  <li className='mt-3 sm:mt-4 text-primary-500'>
                    <span className='text-black text-sm sm:text-base font-bold'>
                      more than 100 brokers
                    </span>
                  </li>
                  <li className='mt-3 sm:mt-4 text-primary-500'>
                    <span className='text-black text-sm sm:text-base font-bold'>
                      across 500+ criteria
                    </span>
                  </li>
                  <li className='mt-3 sm:mt-4 text-primary-500'>
                    <span className='text-black text-sm sm:text-base font-bold'>
                      50,000+ datapoints
                    </span>
                  </li>
                </ul>
                <div className='rounded-xl bg-secondary-50 px-3 py-4 relative min-h-[6rem]'>
                  <div className='z-10 absolute right-0 bottom-0'>
                    <div
                      className='h-24 w-24 z-10 bg-contain bg-center bg-no-repeat'
                      style={{
                        backgroundImage:
                          "url('/images/illustrations/call_out_box.svg')"
                      }}
                    ></div>
                  </div>
                  <div className='z-20 relative'>
                    <p className='text-xs sm:text-sm inline'>
                      We combine our 10+ years of financial experience with
                      readers’ feedback.
                    </p>
                    <Link href={"/review-methodology"}>
                      <span
                        className='max-w-max cursor-pointer no-underline transition-all duration-75 text-xs sm:text-sm inline'
                        style={{
                          background:
                            "linear-gradient(rgb(253, 173, 0) 0%, rgb(253, 173, 0) 100%) 0px 100% / 1px 1px repeat-x"
                        }}
                      >
                        <span>Read more about our methodology</span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='sticky bottom-0 lg:hidden w-full max-w-full bg-white py-4 px-2 shadow-top z-30 flex justify-center items-center'>
          <div className='flex items-center relative w-max flex-col'>
            <button
              className='flex flex-row items-center justify-center font-medium uppercase tracking-wider cursor-pointer select-none shadow-bc hover:shadow-bcHover rounded-lg box-border whitespace-nowrap text-sm h-8 sm:h-10 px-[13px] sm:px-[18px] bg-secondary-500 text-white'
              type='button'
            >
              Find the best broker for me
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='hidden lg:block ml-2 w-4 h-4'
              >
                <path
                  fillRule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindMyBrokerComponent;
