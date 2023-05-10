import React from "react";

const BrokerForResearch = () => {
  return (
    <div className='py-2'>
      <p>
        Let’s take a closer look at how you can use our broker search tool to
        find a broker for you.
      </p>
      <ol className='mt-4 pl-4'>
        <li>
          Select where you live, or the country you want to search for. On
          starting, this field is automatically filled out based on your
          location.
        </li>
        <li>
          In the broker result list (to the right on desktop, or below for
          mobile), the top recommended brokers are shown, and are{" "}
          <span className='font-semibold'>automatically rearranged</span> based
          on your selections. You can click on the yellow{" "}
          <span className='font-semibold'>Visit Broker</span> buttons at any
          time, which will take you directly to the broker’s website where you
          can
          <span className='font-semibold'>open an account</span>.
        </li>
        <li>
          Go through the questions one by one, providing answers based on your
          individual preferences. Click on the blue button below to advance to
          the next question.
        </li>
        <li>
          You may encounter different questions based on whether you indicated
          you are a <span className='font-semibold'>beginner</span> or a more{" "}
          <span className='font-semibold'>advanced</span> trader. As you make
          your selections, you will always see the most relevant top brokers in
          your broker result list. You can get more information at every step by
          moving over, or clicking on the blue ‘
          <span className='font-semibold'>More info</span>’ text and information
          icons. You can also go back at any time to the previous questions by
          clicking the <span className='font-semibold'>Back</span> arrow.
        </li>
        <li>
          After the last question, we show you the{" "}
          <span className='font-semibold'>top two brokers</span> based on your
          preferences. You can choose one or compare them to see which is best
          for you.
        </li>
        <li>
          At the end you can <span className='font-semibold'>sign up</span> to
          save your personalized broker list. You can also go back to the
          beginning and <span className='font-semibold'>start over</span>.
        </li>
        <li>
          Read more about our broker research{" "}
          <span className='font-semibold'>methodology</span> below.
        </li>
      </ol>
      <p className='mt-4'>
        Now, feel free to explore Find My Broker in order to find a broker that
        is best for you! Make sure to return from time to time, as our broker
        recommendation engine is regularly updated and improved.
      </p>
    </div>
  );
};

export default BrokerForResearch;
