/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const Second = () => {
  return (
    <div className="mb-6">
      <div>
        <div className="mb-4">
          <div className="text-xs sm:text-sm text-secondary-500">Step 2</div>
          <div className="text-base sm:text-lg font-semibold mt-2">
            Have your mobile at hand
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between">
          <div className=" w-full mb-4 md:mb-0">
            <div className="text-sm sm:text-base">
              <div>
                <span>
                  Make sure you have a mobile phone or desktop PC with{' '}
                  <span className="font-semibold">internet access</span>.
                </span>
                <br />
                <br />
                <span>
                  In this guide, we'll take you through the trade on a mobile
                  browser, but the process is quite similar on desktop.
                </span>
                <br />
                <br />
                <span>
                  FXTM also offers a great mobile application that you can find
                  in the app stores.
                </span>
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

export default Second;
