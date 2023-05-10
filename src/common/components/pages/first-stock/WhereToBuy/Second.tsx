/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Second = () => {
  return (
    <div className="mb-6">
      <div>
        <div className="mb-4">
          <div className="text-xs sm:text-sm text-secondary-500">Step 2</div>
          <div className="text-base sm:text-lg font-semibold mt-2">
            Why trading and investing in stocks
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className=" w-full mb-4 md:mb-0  del-md:w-2/3">
            <div className="text-sm sm:text-base">
              <div>
                <span>
                  Stocks have a{' '}
                  <span className="font-semibold">
                    long track record of providing higher annualized returns
                  </span>{' '}
                  over the long term than bonds or cash; and{' '}
                  <span className="font-semibold">
                    you can start with small amounts
                  </span>
                  , even as low as $50. On the other hand, the risk of investing
                  in stocks might be higher than purchasing bonds or keeping
                  cash.
                </span>
              </div>
            </div>
            <div className="hidden">
              <div className="mt-8">
                <div className="flex flex-col sm:flex-row justify-center items-center w-full bg-secondary-50 p-3 pr-4">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-14 h-14 bg-contain bg-center bg-no-repeat"
                      style={{
                        backgroundImage:
                          'url("/images/my-first-stock-trade-quest/francis_profile.png")',
                      }}
                    />
                    <div className="font-semibold text-center text-sm mt-2 uppercase">
                      francis
                    </div>
                  </div>
                  <div className="w-full mt-4 sm:mt-0 sm:ml-6 italic text-sm sm:text-base">
                    <div>
                      <span>
                        A <span className="font-semibold">stock</span> is a
                        security that represents the{' '}
                        <span className="font-semibold">
                          ownership of a fraction of a corporation
                        </span>
                        . One unit of stock is called a share. Holding a
                        particular company's share makes you a shareholder. When
                        the value of the company increases, so does the value of
                        your shares, giving you the opportunity to build your
                        wealth.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden del-flex justify-center items-center md:ml-3 w-full md:w-1/3">
            <img
              alt=""
              src="/images/my-first-stock-trade-quest/mfstq_illustration_1_3.svg"
            />
          </div>
        </div>
        <div className="block">
          <div className="mt-4 sm:mt-6">
            <div className="flex flex-col sm:flex-row justify-center items-center w-full bg-secondary-50 p-3 pr-4">
              <div className="flex flex-col items-center">
                <div
                  className="w-14 h-14 bg-contain bg-center bg-no-repeat"
                  style={{
                    backgroundImage:
                      'url("/images/my-first-stock-trade-quest/francis_profile.png")',
                  }}
                />
                <div className="font-semibold text-center text-sm mt-2 uppercase">
                  francis
                </div>
              </div>
              <div className="w-full mt-4 sm:mt-0 sm:ml-6 italic text-sm sm:text-base">
                <div>
                  <span>
                    A <span className="font-semibold">stock</span> is a security
                    that represents the{' '}
                    <span className="font-semibold">
                      ownership of a fraction of a corporation
                    </span>
                    . One unit of stock is called a share. Holding a particular
                    company's share makes you a shareholder. When the value of
                    the company increases, so does the value of your shares,
                    giving you the opportunity to build your wealth.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
