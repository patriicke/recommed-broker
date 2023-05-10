/* eslint-disable react/no-unescaped-entities */
import React from "react";

const EducationComponent = () => {
  return (
    <>
      <div className='w-full'>
        <div className='px-4 w-full sm:px-0 sm:mx-auto sm:w-[970px]'>
          <ol className='flex flex-row items-center justify-start text-sm mb-4 sm:mb-0 mt-4'>
            <li className='items-center justify-center flex flex-row'>
              <a className='px-2 underline' href='https://brokerchooser.com'>
                Home
              </a>
            </li>
            <li className='items-center justify-center hidden sm:flex sm:flex-row'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-4 h-4 text-gray-600 hidden sm:block'
              >
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-4 h-4 text-gray-600 block sm:hidden'
              >
                <path
                  fillRule='evenodd'
                  d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='pl-2 text-gray-400'>Education</span>
            </li>
          </ol>
        </div>
      </div>
      <div className='w-full'>
        <div className='px-4 w-full sm:px-0 sm:mx-auto sm:w-[970px]'>
          <div className='sm:flex-row flex flex-col sm:items-center relative'>
            <div className='flex-1'>
              <div>
                <h1 className='font-bold text-2xl w-3/4 sm:w-auto sm:text-5xl sm:max-w-sm mb-6 text-left'>
                  Education about investment and assets
                </h1>
                <p className='mb-4 text-base'>
                  Investment education from professionals for everyone, from
                  rookies to sharks. Find the latest tips categorized by assets,
                  suggested articles, and a step-by-step guide.
                </p>
              </div>
              <div className='hidden sm:block mt-4'>
                <div className='flex justify-center sm:justify-start text-base mt-4'>
                  <div className='flex items-center relative w-max flex-col'>
                    <a
                      className='flex-row font-medium uppercase tracking-wider cursor-pointer select-none shadow-bc hover:shadow-bcHover rounded-lg box-border whitespace-nowrap  text-sm h-8 sm:h-10 px-[13px] sm:px-[18px] bg-primary-500 text-white flex items-center justify-center'
                      href='#investment-categories'
                    >
                      Investment Categories
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        className='w-4 h-4 animate-bounce'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M19 14l-7 7m0 0l-7-7m7 7V3'
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex-1 flex justify-center items-center mb-8 sm:mb-0'>
              <div
                className='flex-1 block h-48 w-48 sm:h-[360px] sm:w-[360px] sm:ml-4 bg-contain bg-center bg-no-repeat'
                style={{
                  backgroundImage:
                    'url("/images/illustrations/touch_screen.png")'
                }}
              />
            </div>
            <div className='block sm:hidden'>
              <div className='flex justify-center sm:justify-start text-base mt-4'>
                <div className='flex items-center relative w-max flex-col'>
                  <a
                    className='flex-row font-medium uppercase tracking-wider cursor-pointer select-none shadow-bc hover:shadow-bcHover rounded-lg box-border whitespace-nowrap  text-sm h-8 sm:h-10 px-[13px] sm:px-[18px] bg-primary-500 text-white flex items-center justify-center'
                    href='#investment-categories'
                  >
                    Investment Categories
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      className='w-4 h-4 animate-bounce'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M19 14l-7 7m0 0l-7-7m7 7V3'
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <p
            id='investment-categories'
            className='text-xl sm:text-3xl font-bold text-center pt-16 sm:pt-36 mb-6 sm:mb-16 '
          >
            Investment categories
          </p>
          <div className='grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-8 sm:flex sm:flex-row sm:flex-wrap sm:justify-center'>
            <div className='sm:min-w-[180px] sm:w-auto sm:max-w-[216px] flex flex-col items-center shrink'>
              <div
                className='h-36 w-36 sm:h-40 sm:w-40 bg-contain bg-center bg-no-repeat'
                style={{
                  backgroundImage:
                    'url("/images/category_page/icons/stocks_and_etfs.svg")'
                }}
              />
              <h3 className='font-bold text-lg text-center mb-2 sm:mb-0 sm:mt-4'>
                Stocks and ETFs
              </h3>
              <p className='text-sm sm:text-base text-center'>
                Learn about the basics of investing in stocks and funds, and get
                other useful information to help you on your investment journey.
              </p>
              <a
                href='https://brokerchooser.com/education/stocks'
                className='max-w-max cursor-pointer text-sm sm:text-base no-underline transition-all duration-75 flex flex-row items-center mt-2'
                style={{
                  background:
                    "linear-gradient(rgb(253, 173, 0) 0%, rgb(253, 173, 0) 100%) 0px 100% / 1px 1px repeat-x"
                }}
              >
                <span>to Stocks and ETFs</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='inline mb-px h-5 w-5 ml-2'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </div>
            <div className='sm:min-w-[180px] sm:w-auto sm:max-w-[216px] flex flex-col items-center shrink'>
              <div
                className='h-36 w-36 sm:h-40 sm:w-40 bg-contain bg-center bg-no-repeat'
                style={{
                  backgroundImage:
                    'url("/images/category_page/icons/forex.svg")'
                }}
              />
              <h3 className='font-bold text-lg text-center mb-2 sm:mb-0 sm:mt-4'>
                Forex
              </h3>
              <p className='text-sm sm:text-base text-center'>
                Foreign exchange and currency pairs explained. Learn how to
                trade forex and find the best brokers.
              </p>
              <a
                href='https://brokerchooser.com/education/forex'
                className='max-w-max cursor-pointer text-sm sm:text-base no-underline transition-all duration-75 flex flex-row items-center mt-2'
                style={{
                  background:
                    "linear-gradient(rgb(253, 173, 0) 0%, rgb(253, 173, 0) 100%) 0px 100% / 1px 1px repeat-x"
                }}
              >
                <span>to Forex</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='inline mb-px h-5 w-5 ml-2'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </div>
            <div className='sm:min-w-[180px] sm:w-auto sm:max-w-[216px] flex flex-col items-center shrink'>
              <div
                className='h-36 w-36 sm:h-40 sm:w-40 bg-contain bg-center bg-no-repeat'
                style={{
                  backgroundImage:
                    'url("/images/category_page/icons/crypto.svg")'
                }}
              />
              <h3 className='font-bold text-lg text-center mb-2 sm:mb-0 sm:mt-4'>
                Crypto
              </h3>
              <p className='text-sm sm:text-base text-center'>
                Want to start something new? We'll help you navigate the new
                world of crypto.
              </p>
              <a
                href='https://brokerchooser.com/education/crypto'
                className='max-w-max cursor-pointer text-sm sm:text-base no-underline transition-all duration-75 flex flex-row items-center mt-2'
                style={{
                  background:
                    "linear-gradient(rgb(253, 173, 0) 0%, rgb(253, 173, 0) 100%) 0px 100% / 1px 1px repeat-x"
                }}
              >
                <span>to Crypto</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='inline mb-px h-5 w-5 ml-2'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </div>
            <div className='sm:min-w-[180px] sm:w-auto sm:max-w-[216px] flex flex-col items-center shrink'>
              <div
                className='h-36 w-36 sm:h-40 sm:w-40 bg-contain bg-center bg-no-repeat'
                style={{
                  backgroundImage:
                    'url("/images/category_page/icons/options_and_futures.svg")'
                }}
              />
              <h3 className='font-bold text-lg text-center mb-2 sm:mb-0 sm:mt-4'>
                Options and Futures
              </h3>
              <p className='text-sm sm:text-base text-center'>
                What are stock options and futures? Get all the answers here and
                learn how their trading works.
              </p>
              <a
                href='https://brokerchooser.com/education/options-and-futures'
                className='max-w-max cursor-pointer text-sm sm:text-base no-underline transition-all duration-75 flex flex-row items-center mt-2'
                style={{
                  background:
                    "linear-gradient(rgb(253, 173, 0) 0%, rgb(253, 173, 0) 100%) 0px 100% / 1px 1px repeat-x"
                }}
              >
                <span>to Options and Futures</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='inline mb-px h-5 w-5 ml-2'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </div>
            <div className='sm:min-w-[180px] sm:w-auto sm:max-w-[216px] flex flex-col items-center shrink'>
              <div
                className='h-36 w-36 sm:h-40 sm:w-40 bg-contain bg-center bg-no-repeat'
                style={{
                  backgroundImage:
                    'url("/images/category_page/icons/commodities.svg")'
                }}
              />
              <h3 className='font-bold text-lg text-center mb-2 sm:mb-0 sm:mt-4'>
                Commodities
              </h3>
              <p className='text-sm sm:text-base text-center'>
                Just because you like coffee doesn't mean it's a good
                investment. Check out which brokers you can buy commodities
                from.
              </p>
              <a
                href='https://brokerchooser.com/education/commodities'
                className='max-w-max cursor-pointer text-sm sm:text-base no-underline transition-all duration-75 flex flex-row items-center mt-2'
                style={{
                  background:
                    "linear-gradient(rgb(253, 173, 0) 0%, rgb(253, 173, 0) 100%) 0px 100% / 1px 1px repeat-x"
                }}
              >
                <span>to Commodities</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='inline mb-px h-5 w-5 ml-2'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </div>
            <div className='sm:min-w-[180px] sm:w-auto sm:max-w-[216px] flex flex-col items-center shrink'>
              <div
                className='h-36 w-36 sm:h-40 sm:w-40 bg-contain bg-center bg-no-repeat'
                style={{
                  backgroundImage:
                    'url("/images/category_page/icons/invest_and_trade.svg")'
                }}
              />
              <h3 className='font-bold text-lg text-center mb-2 sm:mb-0 sm:mt-4'>
                Invest and Trade
              </h3>
              <p className='text-sm sm:text-base text-center'>
                Investing and trading tips, tricks and tutorials here.
              </p>
              <a
                href='https://brokerchooser.com/education/investing'
                className='max-w-max cursor-pointer text-sm sm:text-base no-underline transition-all duration-75 flex flex-row items-center mt-2'
                style={{
                  background:
                    "linear-gradient(rgb(253, 173, 0) 0%, rgb(253, 173, 0) 100%) 0px 100% / 1px 1px repeat-x"
                }}
              >
                <span>to Invest and Trade</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='inline mb-px h-5 w-5 ml-2'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </div>
            <div className='sm:min-w-[180px] sm:w-auto sm:max-w-[216px] flex flex-col items-center shrink'>
              <div
                className='h-36 w-36 sm:h-40 sm:w-40 bg-contain bg-center bg-no-repeat'
                style={{
                  backgroundImage: 'url("/images/category_page/icons/news.svg")'
                }}
              />
              <h3 className='font-bold text-lg text-center mb-2 sm:mb-0 sm:mt-4'>
                News
              </h3>
              <p className='text-sm sm:text-base text-center'>
                Read about the latest news from the brokerage world right here.
              </p>
              <a
                href='https://brokerchooser.com/education/news'
                className='max-w-max cursor-pointer text-sm sm:text-base no-underline transition-all duration-75 flex flex-row items-center mt-2'
                style={{
                  background:
                    "linear-gradient(rgb(253, 173, 0) 0%, rgb(253, 173, 0) 100%) 0px 100% / 1px 1px repeat-x"
                }}
              >
                <span>to News</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='inline mb-px h-5 w-5 ml-2'
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
          <p className='text-xl sm:text-3xl font-bold text-center pt-16 sm:pt-36 mb-6 sm:mb-16 '>
            Suggested Articles
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-3 sm:gap-x-24 gap-y-16 mb-16'>
            <div className='flex justify-center'>
              <div className='min-w-[200px] max-w-xs'>
                <a
                  href='https://brokerchooser.com/education/investing/are-you-investing-or-are-you-trading-know-the-difference'
                  className='block leading-tight font-bold text-2xl text-black hover:text-primary-500 mb-4'
                >
                  Trading vs Investing - What is the difference? Learn from
                  Professionals
                </a>
                <div className='text-sm sm:text-base mb-4'>
                  To get a good picture of trading vs investing imagine Tom, a
                  30 year old guy sitting in front of ...{" "}
                </div>
                <a
                  href='https://brokerchooser.com/education/investing/are-you-investing-or-are-you-trading-know-the-difference'
                  className='text-black hover:text-primary-500'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='self-start w-4 h-4 sm:w-6 sm:h-6 mt-2'
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
            <div className='flex justify-center'>
              <div className='min-w-[200px] max-w-xs'>
                <a
                  href='https://brokerchooser.com/education/investing/investing-your-money'
                  className='block leading-tight font-bold text-2xl text-black hover:text-primary-500 mb-4'
                >
                  Investing Your Money: The Benefits of Investing on Your Own
                </a>
                <div className='text-sm sm:text-base mb-4'>
                  Investing your money: getting started Let’s start with
                  something that you probably already know. Financial
                  consciousness has three main steps: Keep your ...{" "}
                </div>
                <a
                  href='https://brokerchooser.com/education/investing/investing-your-money'
                  className='text-black hover:text-primary-500'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='self-start w-4 h-4 sm:w-6 sm:h-6 mt-2'
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
            <div className='flex justify-center'>
              <div className='min-w-[200px] max-w-xs'>
                <a
                  href='https://brokerchooser.com/education/investing/launch-your-broker-account'
                  className='block leading-tight font-bold text-2xl text-black hover:text-primary-500 mb-4'
                >
                  Choosing a new brokerage account. One step is all it takes.
                </a>
                <div className='text-sm sm:text-base mb-4'>
                  Can't find the time to open a&nbsp;brokerage account? No
                  problem.&nbsp;I know the drill, been there, done
                  that.&nbsp;Let me show you ...{" "}
                </div>
                <a
                  href='https://brokerchooser.com/education/investing/launch-your-broker-account'
                  className='text-black hover:text-primary-500'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='self-start w-4 h-4 sm:w-6 sm:h-6 mt-2'
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
          <div className='flex flex-col sm:flex-row mb-16'>
            <div className='sm:flex-1 flex items-center self-center sm:self-start mb-8 sm:mb-0'>
              <div
                className='flex-1 block h-48 w-48 sm:h-[360px] sm:w-[360px] bg-contain bg-center bg-no-repeat'
                style={{
                  backgroundImage:
                    'url("/images/illustrations/presentation_light.png")'
                }}
              />
            </div>
            <div className='flex-1 font-medium text-base space-y-8 max-w-md'>
              <p className='text-xl sm:text-3xl font-bold text-left mb-4'>
                6 steps for buying shares online
              </p>
              <div className='space-y-4'>
                <p>
                  You've probably imagined many times how you're going to buy
                  shares in a company and make enough money to travel the world
                  and last you for the rest of your life. Achieving this is not
                  easy, but you have to start somewhere.
                </p>
                <p>
                  Buying shares online is not rocket science. Follow this simple
                  six-step plan:
                </p>
              </div>
              <ol className='list-decimal list-inside space-y-4'>
                <li>Find a good online broker</li>
                <li>Open an investment account</li>
                <li>Upload money to your account</li>
                <li>Find a stock you want to buy</li>
                <li>Buy the stock</li>
                <li>Review your share positions regularly</li>
              </ol>
              <div className='flex'>
                <div className='flex items-center relative w-max flex-col'>
                  <a
                    className='flex flex-row items-center justify-center font-medium uppercase tracking-wider cursor-pointer select-none shadow-bc hover:shadow-bcHover rounded-lg box-border whitespace-nowrap  text-sm h-8 sm:h-10 px-[13px] sm:px-[18px] bg-primary-500 text-white'
                    href='https://brokerchooser.com/education/stocks/how-to-buy-shares-and-how-to-start-stock-investing'
                  >
                    How to Buy shares
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      className='w-4 h-4'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M14 5l7 7m0 0l-7 7m7-7H3'
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationComponent;
