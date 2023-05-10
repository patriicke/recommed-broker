import Link from "next/link";
import React, { ReactNode, useContext } from "react";
import { brokers } from "../../../../data";
import { CompareContext, ICompareContext } from "./context";
import DroperComponent from "./DroperComponent";
import AccountOpening from "./drops/AccountOpening";
import BasicData from "./drops/BasicData";
import CustomerService from "./drops/CustomerService";
import DepositAndWithdrawal from "./drops/DepositAndWithdrawal";
import FeesComponent from "./drops/FeesComponent";
import MarketsAndProducts from "./drops/MarketsAndProducts";
import { ResearchAndEducation } from "./drops/ResearchAndEducation";
import Security from "./drops/Security";
import TradingPlatform from "./drops/TradingPlatform";

const CompareChoosenBrokers = () => {
  const dropcomponent: {
    title: string;
    scoreTitle: string;
    component: ReactNode;
  }[] = [
    {
      title: "Basic data of broker",
      component: <BasicData />,
      scoreTitle: "Overall score"
    },
    {
      title: "Fees",
      component: <FeesComponent />,
      scoreTitle: "Fees score"
    },
    {
      title: "Deposit and withdrawal",
      component: <DepositAndWithdrawal />,
      scoreTitle: "Deposit and withdrawal score"
    },
    {
      title: "Account opening",
      component: <AccountOpening />,
      scoreTitle: "Account opening score"
    },
    {
      title: "Trading platform",
      component: <TradingPlatform />,
      scoreTitle: "Web Platform score"
    },
    {
      title: "Markets and products",
      component: <MarketsAndProducts />,
      scoreTitle: "Markets and products score"
    },
    {
      title: "Research, education",
      component: <ResearchAndEducation />,
      scoreTitle: "Research, education score"
    },
    {
      title: "Customer service",
      component: <CustomerService />,
      scoreTitle: "Customer service score"
    },
    {
      title: "Security",
      component: <Security />,
      scoreTitle: "Overall Score"
    }
  ];
  const { topBarBrokers, startingBrokerIndex } =
    useContext<ICompareContext>(CompareContext);
  return (
    <div className='px-10 py-4'>
      <div>
        <p>
          <span className='text-secondary-500 mr-1'>*</span>
          <span className='text-xs sm:text-sm'>
            Data marked with an asterisk contain additional info, expand the
            relevant sections below to see details.
          </span>
        </p>
      </div>
      <div className='flex flex-col'>
        {dropcomponent.map(({ component, title, scoreTitle }) => {
          return (
            <DroperComponent
              key={title}
              title={title}
              Component={component}
              scoreTitle={scoreTitle}
            />
          );
        })}
      </div>
      <div className='flex flex-row gap-10 overflow-hidden'>
        {topBarBrokers.slice(startingBrokerIndex).map((broker) => {
          return (
            <div
              className='max-w-[300px] min-w-[300px] relative rounded-sm flex flex-col items-center justify-center'
              key={broker.broker_id}
            >
              <div
                className='w-10 h-10 sm:w-12 sm:h-12 shadow-lg mt-4 bg-contain bg-center bg-no-repeat'
                style={{
                  backgroundImage: `url(${broker.broker_details.broker_logo})`
                }}
              />
              <strong className='block text-base text-center sm:text-lg font-bold mt-2'>
                {broker.broker_details.name}
              </strong>
              <p className='mt-4 mx-6 sm:text-sm text-xs font-light text-center'>
                For detailed information and hands-on experience, read our
                review of this broker.
              </p>
              <div className='mt-4 mb-2 w-full flex justify-center'>
                <Link
                  href='/broker-reviews/interactive-brokers-review'
                  target='_blank'
                >
                  <span className='shadow-lg hover:shadow-xl font-medium uppercase inline-flex flex-row items-center justify-center tracking-widest text-secondary-500 bg-white border-2 border-secondary-500 px-3 h-8 text-xs sm:text-sm cursor-pointer rounded-lg whitespace-nowrap'>
                    Read Review
                  </span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <p>
        <span className='text-secondary-500 mr-1'>*</span>
        <span className='text-xs sm:text-[14px]'>
          Data marked with an asterisk contain additional info, expand the
          relevant sections below to see details.
        </span>
      </p>
    </div>
  );
};

export default CompareChoosenBrokers;
