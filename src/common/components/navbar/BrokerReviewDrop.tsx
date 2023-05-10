import { NextPage } from 'next';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { CommonContext } from '../../../context/CommonContext';
import { brokers } from '../../../data';
import { ICommonContext } from '../../types';

export default function BrokerReviewDrop() {
  const { showDrop, setShowDrop } = useContext<ICommonContext>(CommonContext);
  const [filteredBroker, setFilteredBroker] = useState<any[]>([]);

  useEffect(() => {
    const list = ['Fxtm', 'AvaTrade', 'XM', 'Exness', 'OANDA'];
    var filtered: typeof brokers = [];
    list.forEach((item) => {
      const f = brokers.find((broker) => broker.broker_details.name.toLowerCase() === item.toLowerCase());
      f && filtered.push(f);
    });
    setFilteredBroker(filtered);
  }, []);

  // const filteredBrokers = brokers.filter(broker => broker.title ===
  return (
    <div
      className={`absolute top-0 left-0 w-full bg-gray-100 border-b border-gray-500
    cursor-default overflow-y-auto shadow-bc ${
      showDrop === 3 ? 'lg:group-hover:flex ' : 'hidden'
    }`}
      style={{ maxHeight: 'calc(100vh - 60px)', marginTop: '60px' }}
    >
      <div className="container mx-auto w-full lg:max-w-[1250px] flex flex-wrap justify-center text-black font-normal pt-4 pb-8">
        <div className="lg:hidden px-4 flex justify-between w-full items-center">
          <button
            className="bc-navbar-back-navigation block hover:bg-primary-500 text-sm sm:text-base max-w-max cursor-pointer mt-2"
            onClick={() => setShowDrop(0)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="inline mb-px h-5 w-5 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="border-b-2 border-primary-500 box-decoration-slice">
              Back
            </span>
          </button>
        </div>
        <div className="lg:hidden flex justify-between w-full items-center my-4 text-2xl font-bold px-8">
          Broker reviews
        </div>
        <div className="w-full lg:w-1/3 px-4">
          <div className="my-4">
            <div className="bg-secondary-100 rounded px-4 py-1 mb-2 font-medium tracking-wider select-none">
              Broker reviews
            </div>
            <div className="px-4 leading-8">
              Online broker reviews crafted by our team of experts. Fees,
              minimum deposit requirements, withdrawal, account opening,
              research tools and more. We use over 50,000+ data points and a
              consistent, fact-based methodology.
            </div>
            <div className="mt-4 flex justify-center">
              <Link href={'/broker-reviews'}>
                <a
                  onClick={() => setShowDrop(0)}
                  className=" h-10 px-3 py-2 text-base uppercase tracking-wider font-medium cursor-pointer select-none whitespace-nowrap shadow-bc hover:shadow-bcHover rounded-lg box-border bg-secondary-500 text-white hover:text-white hover:no-underline"
                >
                  ALL REVIEWS
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 px-4">
          <div className="mt-4">
            <div className="w-full px-4 py-1 mb-2 bg-gray-200 rounded  font-medium tracking-wider">
              Highest-rated brokers
            </div>
            <ul className="">
              {filteredBroker &&
                filteredBroker?.map((broker) => (
                  <Link
                    href={`/broker-reviews/${broker.broker_details.name.toLowerCase()}`}
                    key={broker.broker_id + '_' + broker.broker_details.name}
                  >
                    <a
                      className="group cursor-pointer"
                      onClick={() => setShowDrop(0)}
                    >
                      <div className="w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1">
                        <div className="w-full md:max-w-max">
                          {broker.broker_details.name}
                        </div>
                        <div>
                          <span className="svg_icon bx-right-arrow-alt lg:invisible group-hover:visible" />
                        </div>
                      </div>
                    </a>
                  </Link>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
