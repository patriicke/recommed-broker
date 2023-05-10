import { TextField } from "@mui/material";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { brokers } from "../../../../data";
import Score from "../../score/Score";

const BrokerReviewsComponent: NextPage = () => {
  const [searchText, setSearchText] = useState('')
  const [filteredbrokers, setFilteredBrokers] = useState<typeof brokers>([])

  useEffect(() => {
     setFilteredBrokers(brokers)
  }, [])

  useEffect(() => {
    if (searchText){
      const res = brokers.filter((broker) =>
        broker.broker_details.name
          .toLowerCase()
          .includes(searchText.toLowerCase())
      );
      console.log("🚀 ~ file: BrokerReviewsComponent.tsx:18 ~ useEffect ~ res:", res)      
      res.length > 0 && setFilteredBrokers(res);
    }else{
      setFilteredBrokers(brokers)
    }
  }, [searchText])
  

  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-full relative text-sm sm:text-base py-4 sm:py-10">
        <span className="relative -top-20"></span>
        <div className="relative w-full sm:mx-auto px-3 sm:px-6 z-20 max-w-[1000px] flex flex-col items-center">
          <h1 className="text-center mb-3 font-bold text-4xl lg:text-5xl w-full">
            Broker reviews
          </h1>
          <div className="border-b-2 w-5/12 border-primary-500"></div>
          <h2 className="mt-3 mb-3 font-bold text-2xl w-full sm:text-3xl text-center">
            Find the right broker and invest on your own
          </h2>
          <div className="max-w-md w-full flex flex-col items-end gap-x-4">
            <div className="flex-1 w-full">
              <div className="w-full">
                <p className="text-sm ml-2 mb-2 mt-4">
                  Please select your country
                </p>
                <TextField
                  value={'Nigeria'}
                  InputProps={{
                    readOnly: true,
                  }}
                  size="small"
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex-1 w-full">
              <p className="text-sm ml-2 mb-2 mt-4">Filter by name</p>
              <div className="relative">
                <input
                  type="text"
                  className="border w-full rounded pl-4 py-1 outline-none text-xs sm:text-base h-10 text-gray-500 border-gray-400 pr-9"
                  name="input"
                  placeholder="Type broker name"
                  autoComplete="off"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* <div className='mt-6 grid grid-cols-3 gap-x-10 gap-y-2 sm:flex sm:flex-row sm:gap-x-6'>
            <div className='flex items-center'>
              <input type='checkbox' className='border-secondary-500' />
              <div className='ml-4'>
                <span className='-ml-2'>Stock, ETF</span>
              </div>
            </div>
            <div className='flex items-center'>
              <input type='checkbox' className='border-secondary-500' />
              <div className='ml-4'>
                <span className='-ml-2'>Forex</span>
              </div>
            </div>
            <div className='flex items-center'>
              <input type='checkbox' className='border-secondary-500' />
              <div className='ml-4'>
                <span className='-ml-2'>Fund</span>
              </div>
            </div>
            <div className='flex items-center'>
              <input type='checkbox' className='border-secondary-500' />
              <div className='ml-4'>
                <span className='-ml-2'>Bond</span>
              </div>
            </div>
            <div className='flex items-center'>
              <input type='checkbox' className='border-secondary-500' />
              <div className='ml-4'>
                <span className='-ml-2'>Options</span>
              </div>
            </div>
            <div className='flex items-center'>
              <input type='checkbox' className='border-secondary-500' />
              <div className='ml-4'>
                <span className='-ml-2'>Futures</span>
              </div>
            </div>
            <div className='flex items-center'>
              <input type='checkbox' className='border-secondary-500' />
              <div className='ml-4'>
                <span className='-ml-2'>Crypto</span>
              </div>
            </div>
            <div className='flex items-center'>
              <input type='checkbox' className='border-secondary-500' />
              <div className='ml-4'>
                <span className='-ml-2'>CFD</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="w-full relative text-sm sm:text-base py-2 sm:py-10 bg-secondary-50 bg-opacity-60">
        <span className="relative -top-20"></span>
        <div className="relative w-full sm:mx-auto px-3 sm:px-6 z-20 max-w-[1200px]">
          <h2 className="font-bold text-2xl w-full sm:text-3xl text-center mb-4 sm:mb-6">
            Brokers available <br />
            <span className="text-gray-400">in Nigeria</span>
          </h2>
          <div className="flex flex-wrap justify-evenly items-center sm:items-stretch flex-col sm:flex-row mt-6">
            {filteredbrokers.map((broker) => (
              <div
                className="flex flex-col items-center justify-start w-64 sm:w-80 shadow-md px-3 py-8 m-2 bg-white relative rounded border-2 border-success-500"
                key={broker.broker_id}
              >
                <div className="absolute flex top-0 bg-success-500 rounded-b pb-0.5 group">
                  <div className="has-tooltip cursor-pointer flex justify-center">
                    <span className="tooltip absolute rounded shadow-lg p-3 mt-8 mx-4 max-w-xs bg-secondary-50 text-sm z-50 text-black w-52 hidden group-hover:block">
                      This broker is recommended for you because it is a great
                      fit based on answers you gave earlier in the Find My
                      Broker tool. This is one of the top 5 brokers that best
                      fit the preferences you provided.
                    </span>
                    <div className="flex text-white text-xs font-semibold px-2">
                      <div
                        className="w-3 h-3 self-center mr-1 bg-contain bg-center bg-no-repeat"
                        style={{
                          backgroundImage:
                            "url('/images/icons/white-check.svg')",
                        }}
                      ></div>
                      Recommended for you
                    </div>
                  </div>
                </div>
                <div className="flex items-center sm:mb-6 sm:h-8 mb-6">
                  <div className="flex justify-center items-center">
                    <div
                      className="h-8 w-8 mr-4 bg-contain bg-center bg-no-repeat"
                      style={{
                        backgroundImage: "url('/images/icons/award_badge.png')",
                      }}
                    ></div>
                    Best CFD broker
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center flex-col">
                    <div className="flex items-center flex-col">
                      <a
                        href={broker.broker_details.broker_link}
                        rel="noreferrer nofollow"
                        target="_blank"
                      >
                        <div
                          className="shadow-lg rounded-md w-12 h-12 sm:w-16 sm:h-16 hover:opacity-80 bg-contain bg-center bg-no-repeat"
                          style={{
                            backgroundImage: `url(${broker.broker_details.broker_logo})`,
                          }}
                        ></div>
                      </a>
                      <div className="flex flex-col items-center mt-2 sm:mt-4">
                        <a
                          href={broker.broker_details.broker_link}
                          rel="noreferrer nofollow"
                          target="_blank"
                        >
                          <strong className="text-base text-center sm:text-lg font-bold hover:text-primary-500 uppercase">
                            {broker?.broker_details?.name}
                          </strong>
                        </a>
                        <Score score={broker.broker_details.score} />
                      </div>
                    </div>
                    <div className="text-center mt-6 flex items-start sm:h-24">
                      {broker.broker_details.broker_description}
                    </div>
                    <div className="flex flex-col items-center mt-7 sm:mt-8">
                      <div className="flex items-center relative w-max flex-col">
                        <a
                          className="flex flex-row items-center justify-center font-medium uppercase tracking-wider cursor-pointer select-none shadow-bc hover:shadow-bcHover rounded-lg box-border whitespace-nowrap text-xs sm:text-sm h-6 sm:h-8 px-[9px] sm:px-[13px] bg-secondary-500 text-white"
                          rel="noreferrer nofollow"
                          target="_blank"
                          href={broker.broker_details.broker_link}
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
                      </div>
                      <div className="text-xs sm:text-sm mt-4">
                        or {` `}
                        <a
                          href={`/broker-reviews/${broker.broker_details.name.toLowerCase()}`}
                          className="max-w-max cursor-pointer no-underline transition-all duration-75  text-xs sm:text-sm inline-block"
                          target="_blank"
                          style={{
                            background:
                              'linear-gradient(rgb(96,195,40) 0%, rgb(96,195,40) 100%) 0px 100% / 1px 1px repeat-x',
                          }} rel="noreferrer"
                        >
                          <span>Read review</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="text-2xs sm:text-xs font-gray-400 mt-2.5 sm:mt-5">
                    76% of retail CFD accounts lose money
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrokerReviewsComponent;
