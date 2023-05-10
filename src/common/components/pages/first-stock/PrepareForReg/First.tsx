/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const First = () => {
  return (
    <div className="mb-6">
      <div>
        <div className="mb-4">
          <div className="text-xs sm:text-sm text-secondary-500">Step 1</div>
          <div className="text-base sm:text-lg font-semibold mt-2">
            What you need before starting the registration process
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className=" w-full mb-4 md:mb-0 ">
            <div className="text-sm sm:text-base">
              <div>
                <span>
                  For a smooth registration, make sure that{' '}
                  <span className="font-semibold">
                    everything you'll need is at hand
                  </span>
                  :
                </span>
                <ul className="list-disc list-outside pl-5">
                  <li>
                    a mobile phone with internet access (desktop works too)
                  </li>
                  <li>documents to identify yourself</li>
                  <li>a bank account in your name (to make your deposit)</li>
                  <li>ca. 45 min free time</li>
                </ul>
              </div>
            </div>
            <div className="hidden" />
          </div>
        </div>
        <div className="block" />
      </div>
    </div>
  );
};

export default First;
