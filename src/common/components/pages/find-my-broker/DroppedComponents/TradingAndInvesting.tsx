import React from "react";

const TradingAndInvesting = () => {
  return (
    <div className='py-2'>
      <div>
        <div className='mb-4 text-md'>
          Top5Brokers’ aim is to help you find a broker that suits your personal
          needs for trading and investing. To aid you in your broker search, we
          have developed Find My Broker, an easy-to-use tool that guides you
          through the process of finding a broker step by step. Through a series
          of questions, we show you the brokers that fit your needs best,
          whether it be for stock trading, forex trading, CFD trading, investing
          in funds, ETFs, options or cryptocurrencies.
        </div>
        <div>
          We also take into consideration whether you are a beginner or a more
          advanced trader. We only recommend trustworthy, regulated brokers, and
          brokers that are available in your country. In your broker search, you
          can also
          <a
            href='#'
            className='inline max-w-max cursor-pointer text-sm sm:text-base no-underline transition-all duration-75'
            target='_blank'
            style={{
              background:
                "linear-gradient(rgb(253, 173, 0) 0%, rgb(253, 173, 0) 100%) 0px 100% / 1px 1px repeat-x"
            }}
          >
            <span>compare brokers</span>
          </a>
          for their pricing and services, and read
          <a
            href='broker-reviews'
            className='inline max-w-max cursor-pointer text-sm sm:text-base no-underline transition-all duration-75'
            target='_blank'
            style={{
              background:
                "linear-gradient(rgb(253, 173, 0) 0%, rgb(253, 173, 0) 100%) 0px 100% / 1px 1px repeat-x"
            }}
          >
            <span>detailed reviews</span>
          </a>
          before making a final choice.
        </div>
      </div>
    </div>
  );
};

export default TradingAndInvesting;
