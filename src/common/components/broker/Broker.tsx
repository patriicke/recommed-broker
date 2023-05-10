import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NextPage } from 'next';
import { useState } from 'react';

const Broker: NextPage<{ broker: any }> = ({ broker }) => {
  const [showWhyReco, setShowWhyReco] = useState<boolean>(false);

  return (
    // <div className="relative flex flex-col items-center justify-start w-64 sm:w-80 shadow-md px-3 py-8 m-2 bg-white rounded">
    <div className="flex flex-col items-center justify-start w-64 sm:w-80 shadow-md px-3 py-8 m-2 bg-white relative rounded border-2 border-primary-500">
      <div className="absolute flex top-0 bg-primary-500 rounded-b pb-0.5">
        <div className="has-tooltip cursor-pointer flex justify-center">
          {showWhyReco && (
            <span className="tooltip absolute rounded shadow-lg p-3 mt-8 mx-4 max-w-xs bg-secondary-50 text-sm z-50 text-black w-52">
              This broker is recommended for you because it is a great fit based
              on answers you gave earlier in the Find My Broker tool. This is
              one of the top 5 brokers that best fit the preferences you
              provided.
            </span>
          )}
          <div
            className="flex text-white text-xs font-semibold  px-2 items-center gap-1"
            onMouseEnter={() => setShowWhyReco(true)}
            onMouseLeave={() => setShowWhyReco(false)}
          >
            <FontAwesomeIcon icon={faCheck} className="text-sm" />
            Recommended for you
          </div>
        </div>
      </div>
      <div className="flex items-center sm:h-8 mb-1">
        {broker?.badge?.hasBadge && (
          <div className="flex justify-center items-center">
            <div
              className="h-8 w-8 mr-4 bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/images/icons/award_badge.png')",
              }}
            ></div>
            {broker?.badge?.badgeTitle}
          </div>
        )}
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center flex-col">
          <div className="flex items-center flex-col">
            <a
              href="https://brokerchooser.com/go-to-broker/xtb/open-account?measurementCategory=01homepa%2F02notrel%2F03notrel&amp;measurementList=front-page-visit-broker-button-logo"
              rel="noreferrer nofollow"
              target="_blank"
            >
              <div
                className="shadow-[0_0_15px_-3px_rgba(0,0,0,0.1)] rounded-md w-12 h-12 sm:w-16 sm:h-16 hover:opacity-80 bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${broker.broker_details.broker_logo})`,
                }}
              ></div>
            </a>
            <div className="flex flex-col items-center mt-2 sm:mt-4">
              <a
                href={`${broker.broker_details.broker_link}`}
                rel="noreferrer nofollow"
                target="_blank"
              >
                <strong className="text-base font-geomanistMedium text-center sm:text-lg font-bold hover:text-primary-500">
                  {broker.broker_details.name}
                </strong>
              </a>
              <div className="flex items-center">
                <div className="relative border border-black rounded-full flex overflow-hidden w-[90px] sm:w-[125px] h-[7px] sm:h-[10px]">
                  <div className="h-full border-r border-black last:border-r-0 z-20 w-[25px] sm:w-[25px]"></div>
                  <div className="h-full border-r border-black last:border-r-0 z-20 w-[25px] sm:w-[25px]"></div>
                  <div className="h-full border-r border-black last:border-r-0 z-20 w-[25px] sm:w-[25px]"></div>
                  <div className="h-full border-r border-black last:border-r-0 z-20 w-[25px] sm:w-[25px]"></div>
                  <div
                    className="absolute h-full z-10 bg-primary-500"
                    style={{ width: '96%' }}
                  ></div>
                </div>
                <div className="font-bold text-xs ml-1.5 sm:text-sm sm:ml-2">
                  4.8
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-6 flex items-start sm:h-24 text-[16px] font-geomanistRegular">
            {broker.broker_details.broker_description}
          </div>
          <div className="flex flex-col items-center mt-7 sm:mt-8">
            {/* <div className="flex items-center relative w-max flex-col">
              <a
                className="flex flex-row items-center justify-center font-medium text-[10px] uppercase tracking-wider cursor-pointer select-none shadow-bc hover:shadow-bcHover rounded-lg box-border whitespace-nowrap text-[12px]:h-6 sm:h-8 px-[9px] sm:px-[13px] bg-blue text-white"
                rel="noreferrer nofollow"
                target="_blank"
                href="#"
              >
                Visit broker
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div> */}
            <div>
              <div className="flex items-center relative w-max flex-col">
                <a
                  className="flex flex-row items-center justify-center md:text-sm uppercase tracking-wider cursor-pointer select-none shadow-bc hover:shadow-bcHover rounded-lg box-border whitespace-nowrap  text-xs lg:text-[14px] font-[500] font-geomanistRegular h-6 sm:h-8 px-[9px] sm:px-[13px] bg-secondary-500 text-white bc-link-no-decor"
                  rel="noreferrer nofollow"
                  target="_blank"
                  href="https://top5broker.com/go-to-broker/xtb/open-account?measurementCategory=01homepa%2F02notrel%2F03notrel&amp;measurementList=front-page-visit-broker-button"
                >
                  Visit broker
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="ml-2 w-3 h-3"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="text-xs sm:text-[14px] font-geomanistRegular mt-4">
              or{' '}
              <a
                href="#"
                className=" max-w-max cursor-pointer  no-underline transition-all duration-75 inline-block"
                target="_blank"
                style={{
                  background:
                    'linear-gradient(rgb(187 228 164) 0%, rgb(187 228 164) 100%) 0px 100% / 1px 1px repeat-x',
                }}
              >
                <span className="underline-offset-2 hover:bg-secondary-50 delay-100 ease-in-out">
                  Read review
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="text-2xs sm:text-xs text-gray-400 mt-2.5 sm:mt-5">
          {broker?.loseMoney}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Broker;
