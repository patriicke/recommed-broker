/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Fouth = () => {
  return (
    <div className="mb-6">
      <div>
        <div className="mb-4">
          <div className="text-xs sm:text-sm text-secondary-500">Step 4</div>
          <div className="text-base sm:text-lg font-semibold mt-2">
            If FXTM is not for you
          </div>
        </div>
        <div className="mt-2 w-full text-sm sm:text-base">
          <div>
            <span>
              It's possible that FXTM is not available in your country, or you
              want to do your first trade at another broker. In this case, we
              suggest that you:
            </span>
            <ul className="list-disc list-outside pl-5">
              <li>
                try our{' '}
                <a target="_blank" href="/find-my-broker" className="underline">
                  Find My Broker
                </a>{' '}
                tool, which helps you choose a broker that suits your needs,
              </li>
              <li>
                or check out our{' '}
                <a
                  target="_blank"
                  href="/best-brokers/best-brokers-for-beginners"
                  className="underline"
                >
                  Best Brokers for Beginners
                </a>{' '}
                article, which lists the best available brokers in your
                location.
              </li>
            </ul>
            <br />
            <span>
              If you choose not to go with FXTM, the steps in this guide won't
              exactly match your registration and trading flow, but{' '}
              <span className="font-semibold">
                the overall process is about the same for most brokers
              </span>
              . So reading this guide through will help you{' '}
              <span className="font-semibold">understand the main steps</span>{' '}
              even if you register elsewhere.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fouth;
