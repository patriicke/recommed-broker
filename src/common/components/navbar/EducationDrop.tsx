/* eslint-disable @next/next/no-html-link-for-pages */
import { NextPage } from 'next';
import Link from 'next/link';
import { useContext } from 'react';
import { CommonContext } from '../../../context/CommonContext';
import { ICommonContext } from '../../types';

export default function EductionDrop() {
  const { showDrop, setShowDrop } = useContext<ICommonContext>(CommonContext);
  return (
    <div
      className={`${
        showDrop === 4 ? '' : 'hidden'
      } absolute top-0 left-0 w-full bg-gray-100 border-b border-gray-500
    cursor-default overflow-y-auto shadow-bc lg:group-hover:flex`}
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
          Education
        </div>

        <div className="w-full lg:w-1/3 px-4">
          <div className="mt-4">
            <div className="w-full px-4 py-1 mb-2 bg-gray-200 rounded  font-medium tracking-wider">
              For beginners
            </div>
            <ul>
              <li className="group">
                <a
                  href="/#"
                  onClick={() => setShowDrop(0)}
                  className="w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1"
                >
                  <div className="w-full md:max-w-max">
                    Best brokers for beginners
                  </div>
                  <div>
                    <span className="svg_icon bx-right-arrow-alt lg:invisible group-hover:visible" />
                  </div>
                </a>
              </li>
              <li className="group">
                <a
                  href="/#"
                  onClick={() => setShowDrop(0)}
                  className="w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1"
                >
                  <div className="w-full md:max-w-max">FAQ</div>
                  <div>
                    <span className="svg_icon bx-right-arrow-alt lg:invisible group-hover:visible" />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full lg:w-1/3 px-4">
          <div className="mt-4">
            <div className="w-full px-4 py-1 mb-2 bg-gray-200 rounded  font-medium tracking-wider">
              The secret sauce
            </div>
            <ul>
              <li className="group">
                <Link href="/review-methodology">
                  <a
                    onClick={() => setShowDrop(0)}
                    className="w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1"
                  >
                    <div className="w-full md:max-w-max">Methodology</div>
                    <div>
                      <span className="svg_icon bx-right-arrow-alt lg:invisible group-hover:visible" />
                    </div>
                  </a>
                </Link>
              </li>
              <li className="group">
                <a
                  href="/who-we-are"
                  onClick={() => setShowDrop(0)}
                  className="w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1"
                >
                  <div className="w-full md:max-w-max">Who we are</div>
                  <div>
                    <span className="svg_icon bx-right-arrow-alt lg:invisible group-hover:visible" />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
