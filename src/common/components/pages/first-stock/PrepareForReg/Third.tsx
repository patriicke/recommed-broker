/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const Third = () => {
  return (
    <div className="mb-6">
      <div>
        <div className="mb-4">
          <div className="text-xs sm:text-sm text-secondary-500">Step 3</div>
          <div className="text-base sm:text-lg font-semibold mt-2">
            Gather the documents you’ll need
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className=" w-full mb-4 md:mb-0">
            <div className="text-sm sm:text-base">
              <div>
                <span>
                  To be able to open an account with FXTM, you are required to
                  provide{' '}
                  <span className="font-semibold">proof of identity</span> and{' '}
                  <span className="font-semibold">proof of residency</span>.
                  Make sure you have these documents at hand (in printed or
                  digital version) before you start the registration process.
                </span>
                <br />
                <br />
                <span>
                  FXTM accepts the following{' '}
                  <span className="font-semibold">
                    documents for identification
                  </span>{' '}
                  purposes:
                </span>
                <ul className="list-disc list-outside pl-5">
                  <li>
                    <span className="font-semibold">Proof of identity</span>:
                    passport / government-issued ID
                  </li>
                  <li>
                    <span className="font-semibold">Proof of residency</span>:
                    utility bill or bank statement (from the last 3 months)
                  </li>
                </ul>
                <br />
                <span>
                  Account opening at FXTM is fully digital, so you can go
                  through the entire identification process in the mobile app
                  (or on the company's web platform).
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
                          'url("/images/my-first-stock-trade-quest/shola_profile.png")',
                      }}
                    />
                    <div className="font-semibold text-center text-sm mt-2 uppercase">
                      shola
                    </div>
                  </div>
                  <div className="w-full mt-4 sm:mt-0 sm:ml-6 italic text-sm sm:text-base text-slate-600">
                    <div>
                      <span>
                        The utility bills or bank statement should state your
                        name, address, date and the issuing company in order to
                        be accepted. Check the{' '}
                        <a
                          target="_blank"
                          href="https://www.FXTM.com/customer-service/help/63964549/what-is-proof-of-address/"
                          className="underline" rel="noreferrer"
                        >
                          detailed requirements
                        </a>
                        !
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                      'url("/images/my-first-stock-trade-quest/shola_profile.png")',
                  }}
                />
                <div className="font-semibold text-center text-sm mt-2 uppercase">
                  shola
                </div>
              </div>
              <div className="w-full mt-4 sm:mt-0 sm:ml-6 italic text-sm sm:text-base text-slate-600">
                <div>
                  <span>
                    The utility bills or bank statement should state your name,
                    address, date and the issuing company in order to be
                    accepted. Check the{' '}
                    <a
                      target="_blank"
                      href="https://www.FXTM.com/customer-service/help/63964549/what-is-proof-of-address/"
                      className="underline" rel="noreferrer"
                    >
                      detailed requirements
                    </a>
                    !
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

export default Third;
