/* eslint-disable react/no-unescaped-entities */
import { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { brokers } from '../../../../data';
import BestBroker from '../../broker/BestBroker';
import Broker from '../../broker/Broker';
import SearchComponent from './../../../components/search/SearchComponent';
import ReviewComponent from './components/ReviewComponent';

export const RightArrow: NextPage = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="ml-2 w-5 h-5"
    >
      <path
        fillRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const HomePageComponent: NextPage = () => {
  const [home_brokers, setHome_brokers] = useState<typeof brokers>([]);
  const [stock_brokers, setStock_brokers] = useState<typeof brokers>([]);
  const [forex_brokers, setForex_brokers] = useState<typeof brokers>([]);
  const [cfd_brokers, setCfd_brokers] = useState<typeof brokers>([]);

  useEffect(() => {
    const list = ['FXTM', 'XM', 'OCTAFX'];
    const newList: typeof brokers = [];
    list.forEach((item) => {
      const r = brokers.find(
        (i) => i?.broker_details?.name?.toLowerCase() === item?.toLowerCase()
      );
      r && newList.push(r);
    });
    setHome_brokers(newList);
  }, []);
  useEffect(() => {
    const list = ['FXTM', 'XM', 'etoro', 'exness', 'avatrade'];
    const newList: typeof brokers = [];
    list.forEach((item) => {
      const r = brokers.find(
        (i) => i?.broker_details?.name?.toLowerCase() === item?.toLowerCase()
      );
      r && newList.push(r);
    });
    setStock_brokers(newList);
  }, []);
  useEffect(() => {
    const list = ['FXTM', 'XM', 'oanda', 'hf markets', 'exness'];
    const newList: typeof brokers = [];
    list.forEach((item) => {
      const r = brokers.find(
        (i) => i?.broker_details?.name?.toLowerCase() === item?.toLowerCase()
      );
      r && newList.push(r);
    });
    setForex_brokers(newList);
  }, []);
  useEffect(() => {
    const list = ['FXTM', 'XM', 'etoro', 'exness', 'OCTAFX'];
    const newList: typeof brokers = [];
    list.forEach((item) => {
      const r = brokers.find(
        (i) => i?.broker_details?.name?.toLowerCase() === item?.toLowerCase()
      );
      r && newList.push(r);
    });
    setCfd_brokers(newList);
  }, []);

  return (
    <>
      <div className="w-full overflow-x-hidden">
        <SearchComponent />

        <div className="w-full relative text-sm sm:text-base py-10 sm:pt-14">
          <span className="relative -top-20" />
          <div className="relative w-full sm:mx-auto px-3 sm:px-6 z-20 max-w-[1200px]">
            <div className="sm:flex-row flex flex-col sm:items-center relative">
              <div className="flex-1">
                <div />
                <div className="hidden sm:block mt-4">
                  <div>
                    <h1 className="font-bold font-geomanistBold text-4xl lg:text-5xl w-full mb-6 sm:mb-8">
                      Not sure which broker to choose?
                    </h1>
                    <p className="mb-7 text-base sm:text-xl">
                      Save hours of dull research by answering a few simple
                      questions. Find the right broker in seconds!
                    </p>
                    <p className="mb-7 text-base sm:text-xl underline underline-offset-4 decoration-yellow-color">
                      Top Nigerian Broker!
                    </p>
                    <div className="flex flex-col items-start gap-4">
                      <div className="flex justify-center sm:justify-start">
                        <div className="flex items-center relative w-max flex-col">
                          <Link href="/find-my-broker" passHref={true}>
                            <span className="flex flex-row items-center justify-center font-medium uppercase tracking-wider cursor-pointer select-none shadow-bc hover:shadow-bcHover rounded-lg box-border whitespace-nowrap text-sm sm:text-base h-10 sm:h-12 px-[18px] sm:px-[26px] bg-primary-500 text-white w-max-[17rem] shadow-2xl border">
                              Find my broker
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex justify-center items-center mb-8 sm:mb-0">
                <div
                  className="flex-1 block h-48 w-48 sm:h-[360px] sm:w-[360px] xl:ml-12 xl:w-[34rem] xl:h-[34rem] sm:ml-4 bg-contain bg-center bg-no-repeat"
                  style={{
                    backgroundImage:
                      'url("/images/illustrations/touch_screen.png")',
                  }}
                />
              </div>
              <div className="block sm:hidden">
                <div>
                  <h1 className="font-bold text-4xl lg:text-5xl w-full mb-6 sm:mb-8">
                    Not sure which broker to choose?
                  </h1>
                  <p className="mb-7 text-base sm:text-xl">
                    Save hours of dull research by answering a few simple
                    questions. Find the right broker in seconds!
                  </p>
                  <p className="mb-7 text-base sm:text-xl underline underline-offset-4 decoration-yellow-color">
                    Nigeria Only
                  </p>
                  <div className="flex flex-col items-start gap-4">
                    <div className="flex justify-center sm:justify-start">
                      <div className="flex items-center relative w-max flex-col">
                        <Link href="/find-my-broker">
                          <span className="flex flex-row items-center justify-center font-medium uppercase tracking-wider cursor-pointer select-none shadow-bc hover:shadow-bcHover rounded-lg box-border whitespace-nowrap  text-sm sm:text-base h-10 sm:h-12 px-[18px] sm:px-[26px] bg-primary-500 text-white w-max-[17rem]">
                            Find my broker
                            <RightArrow />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full relative text-sm sm:text-base py-2 sm:py-10">
          <div className="w-full h-full absolute flex justify-end flex-col bottom-0 ">
            <div className="w-full h-16 bg-secondary-50 bg-opacity-60 rounded-t-[50%]" />
            <div className="w-full bg-secondary-50 bg-opacity-60 h-1/2" />
          </div>
          <span className="relative -top-20" />
          <div className="relative w-full sm:mx-auto px-3 sm:px-6 z-20 max-w-[1200px]">
            <h2 className="font-bold font-geomanistBold text-2xl w-full sm:text-3xl text-center">
              Best online brokers
            </h2>
            <h2 className="-mt-2 font-bold font-geomanistBold text-2xl text-gray-400 w-full sm:text-2xl text-center">
              in Nigeria
            </h2>
            <div className="flex flex-wrap justify-evenly items-center sm:items-stretch flex-col sm:flex-row mt-6">
              {home_brokers.map((broker, index) => {
                return <Broker key={index} broker={broker} />;
              })}
            </div>
          </div>
        </div>

        <div className="bg-secondary-50 bg-opacity-60 flex flex-col justify-center">
          <h2 className="font-bold font-geomanistBold text-2xl w-full sm:text-3xl text-center">
            Best brokers list
          </h2>
          <h2 className="-mt-2 font-bold font-geomanistBold text-2xl text-gray-400 w-full sm:text-2xl text-center">
            for Nigeria in 2023
          </h2>

          <br />
          <div className="flex flex-wrap justify-center sm:flex-row gap-14">
            <BestBroker brokers={stock_brokers} title="Best stock brokers" />
            <BestBroker brokers={forex_brokers} title="Best forex brokers" />
            <BestBroker brokers={cfd_brokers} title="Best CFD brokers" />
          </div>
        </div>

        <div className="w-full relative text-sm sm:text-base py-10 sm:pt-12 sm:pb-14 bg-secondary-50 bg-opacity-60">
          <span className="relative -top-20" />
          <div className="relative w-full sm:mx-auto px-3 sm:px-6 z-20 max-w-[1200px]">
            <h2 className="font-bold font-geomanistBold text-2xl w-full sm:text-3xl text-center mb-4 sm:mb-6">
              Start here if you still feel lost
            </h2>
            <div className="flex flex-wrap justify-evenly w-full items-start">
              <div className="shadow-md flex flex-col items-center rounded-md py-6 px-3 bg-white mt-4 w-64 mx-2">
                <h2 className="font-normal font-geomanistMedium text-2xl w-3/4 sm:w-auto sm:max-w-sm mb-4 text-center">
                  Buy your first stock
                </h2>
                <div className="text-center text-sm sm:text-base mb-4">
                  A step-by-step guide with screenshots and instructions,
                  explaining how to buy your first stocks by yourself!
                </div>
                <a
                  href="/my-first-stock-trade-quest"
                  className="inline max-w-max cursor-pointer text-sm sm:text-base no-underline transition-all duration-75"
                  target="_blank"
                  style={{
                    background:
                      'linear-gradient(rgb(36,192,39) 0%, rgb(36,192,39) 100%) 0px 100% / 1px 1px repeat-x',
                  }}
                >
                  <span>Learn more</span>
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
                </a>
              </div>
              <div className="shadow-md flex flex-col items-center rounded-md py-6 px-3 bg-white mt-4 w-64 mx-2">
                <h2 className="font-normal font-geomanistMedium text-2xl w-3/4 sm:w-auto sm:max-w-sm mb-4 text-center">
                  What is Forex Trading?
                </h2>
                <div className="text-center text-sm sm:text-base mb-4">
                  Forex trading means the buying and selling of currency pairs.
                  You are basically buying one currency while selling another
                  ...{' '}
                </div>
                <a
                  href="/best-brokers/best-forex-brokers/forex-trading"
                  className="inline max-w-max cursor-pointer text-sm sm:text-base no-underline transition-all duration-75"
                  target="_blank"
                  style={{
                    background:
                      'linear-gradient(rgb(36,192,39) 0%, rgb(36,192,39) 100%) 0px 100% / 1px 1px repeat-x',
                  }}
                >
                  <span>Learn more</span>
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
                </a>
              </div>
              <div className="shadow-md flex flex-col items-center rounded-md py-6 px-3 bg-white mt-4 w-64 mx-2">
                <h2 className="font-normal font-geomanistMedium text-2xl w-3/4 sm:w-auto sm:max-w-sm mb-4 text-center">
                  What is crypto trading?
                </h2>
                <div className="text-center text-sm sm:text-base mb-4">
                  Crypto trading means the trading of cryptocurrencies or
                  digital currencies for other assets, such as conventional fiat
                  money or other digital currencies ...
                </div>
                <a
                  href="/what-is-crypto-trading"
                  className="inline max-w-max cursor-pointer text-sm sm:text-base no-underline transition-all duration-75"
                  target="_blank"
                  style={{
                    background:
                      'linear-gradient(rgb(36,192,39) 0%, rgb(36,192,39) 100%) 0px 100% / 1px 1px repeat-x',
                  }}
                >
                  <span>Learn more</span>
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
                </a>
              </div>
            </div>
          </div>
        </div>

        <ReviewComponent />

        <div className="w-full relative text-sm sm:text-base py-10 sm:py-14">
          <span className="relative -top-20" />
          <div className="relative w-full sm:mx-auto px-3 sm:px-6 z-20 max-w-[1000px]">
            <div className="sm:flex-row-reverse flex flex-col sm:items-center relative">
              <div className="flex-1">
                <div>
                  <h2 className="font-geomanistBold text-2xl w-full sm:text-3xl text-center sm:text-left mb-4 sm:mb-6">
                    Who we are?
                  </h2>
                </div>
                <div className="hidden sm:block mt-4">
                  <div className="flex flex-col items-start">
                    <div className="mb-3 sm:mb-4">
                      <Link href="/#review-methodology">
                        <a
                          className="inline max-w-max cursor-pointer text-sm sm:text-base no-underline transition-all duration-75"
                          style={{
                            background:
                              'linear-gradient(rgb(36,192,39) 0%, rgb(36,192,39) 100%) 0px 100% / 1px 1px repeat-x',
                          }}
                        >
                          <span>
                            Independent comparison site for online brokers
                          </span>
                        </a>
                      </Link>
                    </div>
                    <div className="mb-3 sm:mb-4">
                      <Link href="/#review-methodology">
                        <a
                          href="/what-brokers-will-you-find-here"
                          className="inline max-w-max cursor-pointer text-sm sm:text-base no-underline transition-all duration-75"
                          style={{
                            background:
                              'linear-gradient(rgb(36,192,39) 0%, rgb(36,192,39) 100%) 0px 100% / 1px 1px repeat-x',
                          }}
                        >
                          <span>
                            Partnered up with the world’s best brokerages
                          </span>
                        </a>
                      </Link>
                    </div>
                    <div className="mb-3 sm:mb-4">
                      <Link href="/#review-methodology">
                        <a
                          href="/why-trust-us"
                          className="inline max-w-max cursor-pointer text-sm sm:text-base no-underline transition-all duration-75"
                          style={{
                            background:
                              'linear-gradient(rgb(36,192,39) 0%, rgb(36,192,39) 100%) 0px 100% / 1px 1px repeat-x',
                          }}
                        >
                          <span>Trusted by millions of users worldwide</span>
                        </a>
                      </Link>
                    </div>
                    <div className="mb-3 sm:mb-4">
                      <Link href="/#review-methodology">
                        <a
                          href="/who-we-are"
                          className="inline max-w-max cursor-pointer text-sm sm:text-base no-underline transition-all duration-75"
                          style={{
                            background:
                              'linear-gradient(rgb(36,192,39) 0%, rgb(36,192,39) 100%) 0px 100% / 1px 1px repeat-x',
                          }}
                        >
                          <span>Fueled by our expert team</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex justify-center items-center mb-8 sm:mb-0">
                <div
                  className="flex-1 block h-48 w-48 sm:h-[360px] sm:w-[360px] mr-4 sm:mr-4 bg-contain bg-center bg-no-repeat"
                  style={{
                    backgroundImage:
                      'url("/images/illustrations/presentation_light.png")',
                  }}
                />
              </div>
              <div className="block sm:hidden">
                <div className="flex flex-col items-start">
                  <div className="mb-3 sm:mb-4">
                    <a
                      href="/methodology"
                      className="inline max-w-max cursor-pointer text-sm sm:text-base no-underline transition-all duration-75"
                      style={{
                        background:
                          'linear-gradient(rgb(36,192,39) 0%, rgb(36,192,39) 100%) 0px 100% / 1px 1px repeat-x',
                      }}
                    >
                      <span>
                        Independent comparison site for online brokers
                      </span>
                    </a>
                  </div>
                  <div className="mb-3 sm:mb-4">
                    <a
                      href="/what-brokers-will-you-find-here"
                      className="inline max-w-max cursor-pointer text-sm sm:text-base no-underline transition-all duration-75"
                      style={{
                        background:
                          'linear-gradient(rgb(36,192,39) 0%, rgb(36,192,39) 100%) 0px 100% / 1px 1px repeat-x',
                      }}
                    >
                      <span>Partnered up with the world’s best brokerages</span>
                    </a>
                  </div>
                  <div className="mb-3 sm:mb-4">
                    <a
                      href="/why-trust-us"
                      className="inline max-w-max cursor-pointer text-sm sm:text-base no-underline transition-all duration-75"
                      style={{
                        background:
                          'linear-gradient(rgb(36,192,39) 0%, rgb(36,192,39) 100%) 0px 100% / 1px 1px repeat-x',
                      }}
                    >
                      <span>Trusted by millions of users worldwide</span>
                    </a>
                  </div>
                  <div className="mb-3 sm:mb-4">
                    <a
                      href="/who-we-are"
                      className="inline max-w-max cursor-pointer text-sm sm:text-base no-underline transition-all duration-75"
                      style={{
                        background:
                          'linear-gradient(rgb(36,192,39) 0%, rgb(36,192,39) 100%) 0px 100% / 1px 1px repeat-x',
                      }}
                    >
                      <span>Fueled by our expert team</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full relative text-sm sm:text-base py-10 sm:py-14">
          <span className="relative -top-20" />
          <div className="relative w-full sm:mx-auto px-3 sm:px-6 z-20 max-w-[1000px]">
            <h2 className="font-geomanistBold text-2xl w-full sm:text-3xl text-center mb-4 sm:mb-6">
              As seen on
            </h2>
            <div className="flex flex-wrap justify-center">
              <a
                className="block"
                href="https://www.bloomberg.com/news/articles/2021-01-26/tax-for-trading-stocks-robinhood-investors-confused-over-how-much-they-must-pay"
                rel="nofollow"
              >
                <div
                  className="mx-8 my-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 bg-contain bg-center bg-no-repeat"
                  style={{
                    width: '125px',
                    height: '26px',
                    backgroundImage: 'url("/images/media_logos/bloomberg.svg")',
                  }}
                />
              </a>
              <a
                className="block"
                href="https://markets.businessinsider.com/news/stocks/amtd-digital-stock-price-trading-volume-wanes-after-massive-surge-2022-8"
                rel="nofollow"
              >
                <div
                  className="mx-8 my-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 bg-contain bg-center bg-no-repeat"
                  style={{
                    width: '89px',
                    height: '29px',
                    backgroundImage:
                      'url("/images/media_logos/business_insider.svg")',
                  }}
                />
              </a>
              <a
                className="block"
                href="https://www.cnbc.com/video/2022/06/28/coinflex-token-raise-47-million-ftx-buy-robinhood-crypto-world.html"
                rel="nofollow"
              >
                <div
                  className="mx-8 my-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 bg-contain bg-center bg-no-repeat"
                  style={{
                    width: '46px',
                    height: '38px',
                    backgroundImage: 'url("/images/media_logos/cnbc.svg")',
                  }}
                />
              </a>
              <a
                className="block"
                href="https://www.ft.com/content/4f8a3790-9d4a-4d4b-a72c-9bdcb88618e0"
                rel="nofollow"
              >
                <div
                  className="mx-8 my-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 bg-contain bg-center bg-no-repeat"
                  style={{
                    width: '104px',
                    height: '34px',
                    backgroundImage:
                      'url("/images/media_logos/financial_times.svg")',
                  }}
                />
              </a>
              <a
                className="block"
                href="https://www.forbes.com/sites/billybambrough/2022/06/08/serious-warning-issued-over-major-bitcoin-and-crypto-exchange-binance-and-its-ethereum-rival-bnb-after-sec-bombshell-hits-its-price/?sh=758c94dc4b37"
                rel="nofollow"
              >
                <div
                  className="mx-8 my-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 bg-contain bg-center bg-no-repeat"
                  style={{
                    width: '88px',
                    height: '24px',
                    backgroundImage: 'url("/images/media_logos/forbes.svg")',
                  }}
                />
              </a>
              <a
                className="block"
                href="https://fortune.com/2022/07/05/india-crypto-tax-trading-volume-exchanges-coindcx-zebpay-wazirx-koinbazar-startups-investors/"
                rel="nofollow"
              >
                <div
                  className="mx-8 my-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 bg-contain bg-center bg-no-repeat"
                  style={{
                    width: '89px',
                    height: '23px',
                    backgroundImage:
                      'url("/images/media_logos/fortune_magazine.svg")',
                  }}
                />
              </a>
              <a
                className="block"
                href="https://www.investopedia.com/robinhood-begins-crypto-wallet-beta-tests-5217005"
                rel="nofollow"
              >
                <div
                  className="mx-8 my-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 bg-contain bg-center bg-no-repeat"
                  style={{
                    width: '146px',
                    height: '25px',
                    backgroundImage:
                      'url("/images/media_logos/investopedia.svg")',
                  }}
                />
              </a>
              <a
                className="block"
                href="https://www.fool.com/investing/2022/07/27/cathie-wood-trades-shopify-and-coinbase-stocks/"
                rel="nofollow"
              >
                <div
                  className="mx-8 my-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 bg-contain bg-center bg-no-repeat"
                  style={{
                    width: '161px',
                    height: '23px',
                    backgroundImage:
                      'url("/images/media_logos/motley_fool.svg")',
                  }}
                />
              </a>
              <a
                className="block"
                href="https://seekingalpha.com/news/3864016-crypto-exchange-huobi-registers-with-australian-financial-watchdog"
                rel="nofollow"
              >
                <div
                  className="mx-8 my-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 bg-contain bg-center bg-no-repeat"
                  style={{
                    width: '132px',
                    height: '29px',
                    backgroundImage:
                      'url("/images/media_logos/seeking_alpha.svg")',
                  }}
                />
              </a>
              <a
                className="block"
                href="https://au.finance.yahoo.com/news/reason-aussies-are-losing-up-to-25-k-a-year-012949858.html"
                rel="nofollow"
              >
                <div
                  className="mx-8 my-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 bg-contain bg-center bg-no-repeat"
                  style={{
                    width: '83px',
                    height: '34px',
                    backgroundImage:
                      'url("/images/media_logos/yahoo_finance.svg")',
                  }}
                />
              </a>
            </div>
            {/* <div className='text-center mt-8'>
              <a
                href='education/news/media-mentions'
                className='inline max-w-max cursor-pointer text-sm sm:text-base no-underline transition-all duration-75'
                target='_blank'
                style={{
                  background:
                    "linear-gradient(rgb(36,192,39) 0%, rgb(36,192,39) 100%) 0px 100% / 1px 1px repeat-x"
                }}
              >
                <span>See all media mentions</span>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePageComponent;
