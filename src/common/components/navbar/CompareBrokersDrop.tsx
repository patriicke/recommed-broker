import { NextPage } from "next";
import Link from "next/link";
import { useContext } from "react";
import { CommonContext } from "../../../context/CommonContext";
import { ICommonContext } from "../../types";

export const CompareBrokersDrop: NextPage = () => {
  const { showDrop, setShowDrop } = useContext<ICommonContext>(CommonContext);
  return (
    <div
      className={`${
        showDrop === 1 ? "" : "hidden"
      } absolute top-0 left-0 w-full bg-gray-100 border-b border-gray-500
    cursor-default overflow-y-auto shadow-bc lg:group-hover:flex duration-100 delay-100`}
      style={{ maxHeight: "calc(100vh - 60px)", marginTop: "60px" }}
    >
      <div className='container mx-auto w-full lg:max-w-[1250px] flex flex-wrap justify-center text-black font-normal pt-4 pb-8'>
        <div className='lg:hidden px-4 flex justify-between w-full items-center'>
          <button
            className='bc-navbar-back-navigation block hover:bg-primary-500 text-sm sm:text-base max-w-max cursor-pointer mt-2'
            onClick={() => setShowDrop(0)}
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
            <span
              className='border-b-2 border-primary-500 box-decoration-slice z-20'
              onClick={() => {
                setShowDrop(0);
                console.log("ee");
              }}
            >
              Back
            </span>
          </button>
        </div>
        <div className='lg:hidden flex justify-between w-full items-center my-4 text-2xl font-bold px-8'>
          Compare brokers
        </div>
        <div className='w-full lg:w-1/3 px-4'>
          <div className='my-4'>
            <div className='bg-secondary-100 rounded px-4 py-1 mb-2 font-medium tracking-wider select-none'>
              Compare Broker tool
            </div>
            <div className='px-4 leading-8'>
              Compare selected brokers by their fees, minimum deposit,
              withdrawal, account opening and other areas. Filter according to
              broker or product type, including stocks, futures, CFDs or crypto.
            </div>
            <div className='mt-4 flex justify-center'>
              <Link href={"/compare"}>
                <span
                  className=' h-10 px-3 py-2 text-base uppercase tracking-wider font-medium cursor-pointer select-none whitespace-nowrap shadow-bc hover:shadow-bcHover rounded-lg box-border bg-secondary-500 text-white hover:text-white hover:no-underline'
                  data-ga-event-element-id='https://brokerchooser.com/compare'
                  data-ga-event-category='Navbar navigation'
                  data-ga-event-impression
                  data-ga-event-click={1}
                >
                  COMPARE BROKERS
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className='w-full lg:w-1/3 px-4'>
          <div className='mt-4'>
            <div className='w-full px-4 py-1 mb-2 bg-gray-200 rounded  font-medium tracking-wider'>
              Compare highest-rated brokers
            </div>
            <ul>
              <li className='group'>
                <a
                  href='https://brokerchooser.com/compare/interactive-brokers-vs-saxo-bank'
                  className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                  data-ga-event-element-id='https://brokerchooser.com/compare/interactive-brokers-vs-saxo-bank'
                  data-ga-event-category='Navbar navigation'
                  data-ga-event-impression
                  data-ga-event-click={1}
                >
                  <div className='w-full md:max-w-max'>
                    Interactive Brokers vs Saxo Bank
                  </div>
                  <div>
                    <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible' />
                  </div>
                </a>
              </li>
              <li className='group'>
                <a
                  href='https://brokerchooser.com/compare/degiro-vs-interactive-brokers'
                  className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                  data-ga-event-element-id='https://brokerchooser.com/compare/degiro-vs-interactive-brokers'
                  data-ga-event-category='Navbar navigation'
                  data-ga-event-impression
                  data-ga-event-click={1}
                >
                  <div className='w-full md:max-w-max'>
                    DEGIRO vs Interactive Brokers
                  </div>
                  <div>
                    <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible' />
                  </div>
                </a>
              </li>
              <li className='group'>
                <a
                  href='https://brokerchooser.com/compare/saxo-bank-vs-swissquote'
                  className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                  data-ga-event-element-id='https://brokerchooser.com/compare/saxo-bank-vs-swissquote'
                  data-ga-event-category='Navbar navigation'
                  data-ga-event-impression
                  data-ga-event-click={1}
                >
                  <div className='w-full md:max-w-max'>
                    Saxo Bank vs Swissquote
                  </div>
                  <div>
                    <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible' />
                  </div>
                </a>
              </li>
              <li className='group'>
                <a
                  href='https://brokerchooser.com/compare/capitalcom-vs-xtb'
                  className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                  data-ga-event-element-id='https://brokerchooser.com/compare/capitalcom-vs-xtb'
                  data-ga-event-category='Navbar navigation'
                  data-ga-event-impression
                  data-ga-event-click={1}
                >
                  <div className='w-full md:max-w-max'>Capital.com vs XTB</div>
                  <div>
                    <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible' />
                  </div>
                </a>
              </li>
              <li className='group'>
                <a
                  href='https://brokerchooser.com/compare/charles-schwab-vs-e-trade'
                  className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                  data-ga-event-element-id='https://brokerchooser.com/compare/charles-schwab-vs-e-trade'
                  data-ga-event-category='Navbar navigation'
                  data-ga-event-impression
                  data-ga-event-click={1}
                >
                  <div className='w-full md:max-w-max'>
                    Charles Schwab vs E*TRADE
                  </div>
                  <div>
                    <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible' />
                  </div>
                </a>
              </li>
              <li className='group'>
                <a
                  href='https://brokerchooser.com/compare/interactive-brokers-vs-td-ameritrade'
                  className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                  data-ga-event-element-id='https://brokerchooser.com/compare/interactive-brokers-vs-td-ameritrade'
                  data-ga-event-category='Navbar navigation'
                  data-ga-event-impression
                  data-ga-event-click={1}
                >
                  <div className='w-full md:max-w-max'>
                    Interactive Brokers vs TD Ameritrade
                  </div>
                  <div>
                    <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible' />
                  </div>
                </a>
              </li>
              <li className='group'>
                <a
                  href='https://brokerchooser.com/compare/etoro-vs-xtb'
                  className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                  data-ga-event-element-id='https://brokerchooser.com/compare/etoro-vs-xtb'
                  data-ga-event-category='Navbar navigation'
                  data-ga-event-impression
                  data-ga-event-click={1}
                >
                  <div className='w-full md:max-w-max'>eToro vs XTB</div>
                  <div>
                    <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible' />
                  </div>
                </a>
              </li>
              <li className='group'>
                <a
                  href='https://brokerchooser.com/compare/interactive-brokers-vs-tradestation'
                  className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                  data-ga-event-element-id='https://brokerchooser.com/compare/interactive-brokers-vs-tradestation'
                  data-ga-event-category='Navbar navigation'
                  data-ga-event-impression
                  data-ga-event-click={1}
                >
                  <div className='w-full md:max-w-max'>
                    Interactive Brokers vs Tradestation
                  </div>
                  <div>
                    <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible' />
                  </div>
                </a>
              </li>
              <li className='group'>
                <a
                  href='https://brokerchooser.com/compare/fidelity-vs-interactive-brokers'
                  className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                  data-ga-event-element-id='https://brokerchooser.com/compare/fidelity-vs-interactive-brokers'
                  data-ga-event-category='Navbar navigation'
                  data-ga-event-impression
                  data-ga-event-click={1}
                >
                  <div className='w-full md:max-w-max'>
                    Fidelity vs Interactive Brokers
                  </div>
                  <div>
                    <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible' />
                  </div>
                </a>
              </li>
              <li className='group'>
                <a
                  href='https://brokerchooser.com/compare/capitalcom-vs-etoro'
                  className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                  data-ga-event-element-id='https://brokerchooser.com/compare/capitalcom-vs-etoro'
                  data-ga-event-category='Navbar navigation'
                  data-ga-event-impression
                  data-ga-event-click={1}
                >
                  <div className='w-full md:max-w-max'>
                    Capital.com vs eToro
                  </div>
                  <div>
                    <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible' />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='w-full lg:w-1/3 px-4'>
          <div className='mt-4'>
            <div className='w-full px-4 py-1 mb-2 bg-gray-200 rounded  font-medium tracking-wider'>
              Compare other popular brokers
            </div>
            <ul>
              <li className='group'>
                <a
                  href='https://brokerchooser.com/broker-reviews/etoro-review/etoro-alternatives/freetrade'
                  className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                  data-ga-event-element-id='https://brokerchooser.com/broker-reviews/etoro-review/etoro-alternatives/freetrade'
                  data-ga-event-category='Navbar navigation'
                  data-ga-event-impression
                  data-ga-event-click={1}
                >
                  <div className='w-full md:max-w-max'>eToro vs Freetrade</div>
                  <div>
                    <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible' />
                  </div>
                </a>
              </li>
              <li className='group'>
                <a
                  href='https://brokerchooser.com/compare/etoro-vs-interactive-brokers'
                  className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                  data-ga-event-element-id='https://brokerchooser.com/compare/etoro-vs-interactive-brokers'
                  data-ga-event-category='Navbar navigation'
                  data-ga-event-impression
                  data-ga-event-click={1}
                >
                  <div className='w-full md:max-w-max'>
                    eToro vs Interactive Brokers
                  </div>
                  <div>
                    <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible' />
                  </div>
                </a>
              </li>
              <li className='group'>
                <a
                  href='https://brokerchooser.com/compare/degiro-vs-trading-212'
                  className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                  data-ga-event-element-id='https://brokerchooser.com/compare/degiro-vs-trading-212'
                  data-ga-event-category='Navbar navigation'
                  data-ga-event-impression
                  data-ga-event-click={1}
                >
                  <div className='w-full md:max-w-max'>
                    DEGIRO vs Trading 212
                  </div>
                  <div>
                    <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible' />
                  </div>
                </a>
              </li>
              <li className='group'>
                <a
                  href='https://brokerchooser.com/compare/degiro-vs-etoro'
                  className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                  data-ga-event-element-id='https://brokerchooser.com/compare/degiro-vs-etoro'
                  data-ga-event-category='Navbar navigation'
                  data-ga-event-impression
                  data-ga-event-click={1}
                >
                  <div className='w-full md:max-w-max'>DEGIRO vs eToro</div>
                  <div>
                    <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible' />
                  </div>
                </a>
              </li>
              <li className='group'>
                <a
                  href='https://brokerchooser.com/compare/etoro-vs-plus500'
                  className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                  data-ga-event-element-id='https://brokerchooser.com/compare/etoro-vs-plus500'
                  data-ga-event-category='Navbar navigation'
                  data-ga-event-impression
                  data-ga-event-click={1}
                >
                  <div className='w-full md:max-w-max'>Plus500 vs eToro</div>
                  <div>
                    <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible' />
                  </div>
                </a>
              </li>
              <li className='group'>
                <a
                  href='https://brokerchooser.com/compare/degiro-vs-revolut'
                  className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                  data-ga-event-element-id='https://brokerchooser.com/compare/degiro-vs-revolut'
                  data-ga-event-category='Navbar navigation'
                  data-ga-event-impression
                  data-ga-event-click={1}
                >
                  <div className='w-full md:max-w-max'>DEGIRO vs Revolut</div>
                  <div>
                    <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible' />
                  </div>
                </a>
              </li>
              <li className='group'>
                <a
                  href='https://brokerchooser.com/compare/etoro-vs-trading-212'
                  className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                  data-ga-event-element-id='https://brokerchooser.com/compare/etoro-vs-trading-212'
                  data-ga-event-category='Navbar navigation'
                  data-ga-event-impression
                  data-ga-event-click={1}
                >
                  <div className='w-full md:max-w-max'>
                    eToro vs Trading 212
                  </div>
                  <div>
                    <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible' />
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className='mt-4'>
            <div className='w-full px-4 py-1 mb-2 bg-gray-200 rounded  font-medium tracking-wider'>
              Compare Digital Banks tool
            </div>
            <ul>
              <li className='group'>
                <a
                  href='https://brokerchooser.com/digital-banks/comparison'
                  className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                  data-ga-event-element-id='https://brokerchooser.com/digital-banks/comparison'
                  data-ga-event-category='Navbar navigation'
                  data-ga-event-impression
                  data-ga-event-click={1}
                >
                  <div className='w-full md:max-w-max'>
                    Compare digital banks
                  </div>
                  <div>
                    <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible' />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareBrokersDrop;
