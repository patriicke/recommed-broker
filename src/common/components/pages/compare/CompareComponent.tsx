/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import LongSVG from "../../../../assets/svgs/LongSVG";
import CompareSideBar from "./CompareSideBar";
import CompareTopComponent from "./CompareTopComponent";

const CompareComponent = () => {
  return (
    <div className='min-h-full'>
      <div className='flex flex-col'>
        <div className='relative bg-secondary-50 overflow-hidden flex flex-col sm:flex-row md:px-[100px] xl:px-[240px] justify-between'>
          <div className='relative px-4 pt-2 pb-2 lg:px-0 w-full text-center'>
            <h1 className='text-xl sm:text-3xl font-extrabold pt-4'>
              Need help in comparison?
            </h1>
            <p className='text-xs sm:text-base lg:text-lg pt-2 pb-4'>
              Filter and compare brokers to find the one best suited for you!
            </p>
          </div>
        </div>
        <div className='flex'>
          <CompareSideBar />
          <CompareTopComponent />
        </div>
        <div className='min-h-full overflow-auto w-full bg-[#222]'>
          <div className='box-content pt-8 px-8 lg:px-0'>
            <div className='text-white text-sm mr-4 flex flex-col space-y-4 mb-8 md:ml-100 lg:ml-[240px]'>
              <p>
                Choosing an online broker and doing brokerage comparison can be
                challenging due to the many options available. Finding the right
                trading platform can be difficult, especially for beginners, so
                we’ve done a lot of the legwork for you!
              </p>
              <p>
                Top5Brokers' online broker comparison tool is designed to bring
                more clarity into your brokerage selection. Compare more than
                100 online brokers and trading platforms side by side across 9
                main categories, thus saving you hours of research. Explore
                broker comparisons based on areas such as account fees, trading
                commissions, resources for beginners, trading platforms, mobile
                apps and customer service.
              </p>
              <p>
                You can also read detailed reviews of each online brokerage or
                compare your top picks with each other. Note that in order to
                improve your broker comparison experience, brokerages are listed
                based on your location (which you can modify).
              </p>
            </div>
            <h4 className='hidden text-gray-400 font-bold text-base md:ml-100 lg:ml-[240px]'>
              Popular Top2 pages
            </h4>
            <div className='hidden d-flex flex-row flex-wrap md:ml-100 lg:ml-[240px]'>
              <div className='mt-2 mr-4'>
                <a
                  target='_blank'
                  className='shadow-lg hover:shadow-xl font-medium uppercase inline-flex flex-row items-center justify-center tracking-widest text-white bg-secondary-500 px-3 h-6 text-2xs sm:text-xs cursor-pointer rounded-lg whitespace-nowrap'
                  href='https://brokerchooser.com/compare/choicetrade-vs-tradestation'
                  rel='noreferrer'
                >
                  ChoiceTrade vs TradeStation
                </a>
              </div>
              <div className='mt-2 mr-4'>
                <a
                  target='_blank'
                  className='shadow-lg hover:shadow-xl font-medium uppercase inline-flex flex-row items-center justify-center tracking-widest text-white bg-secondary-500 px-3 h-6 text-2xs sm:text-xs cursor-pointer rounded-lg whitespace-nowrap'
                  href='https://brokerchooser.com/compare/ally-invest-vs-e-trade'
                  rel='noreferrer'
                >
                  Ally Invest vs E-Trade
                </a>
              </div>
              <div className='mt-2 mr-4'>
                <a
                  target='_blank'
                  className='shadow-lg hover:shadow-xl font-medium uppercase inline-flex flex-row items-center justify-center tracking-widest text-white bg-secondary-500 px-3 h-6 text-2xs sm:text-xs cursor-pointer rounded-lg whitespace-nowrap'
                  href='https://brokerchooser.com/compare/sogotrade-vs-tradestation'
                  rel='noreferrer'
                >
                  Sogotrade vs tradestation
                </a>
              </div>
              <div className='mt-2 mr-4'>
                <a
                  target='_blank'
                  className='shadow-lg hover:shadow-xl font-medium uppercase inline-flex flex-row items-center justify-center tracking-widest text-white bg-secondary-500 px-3 h-6 text-2xs sm:text-xs cursor-pointer rounded-lg whitespace-nowrap'
                  href='https://brokerchooser.com/compare/marketsx-vs-plus500'
                  rel='noreferrer'
                >
                  MarketsX vs Plus500
                </a>
              </div>
              <div className='mt-2 mr-4'>
                <a
                  target='_blank'
                  className='shadow-lg hover:shadow-xl font-medium uppercase inline-flex flex-row items-center justify-center tracking-widest text-white bg-secondary-500 px-3 h-6 text-2xs sm:text-xs cursor-pointer rounded-lg whitespace-nowrap'
                  href='https://brokerchooser.com/compare/etx-capital-vs-xtb'
                  rel='noreferrer'
                >
                  ETX Capital vs XTB
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareComponent;
