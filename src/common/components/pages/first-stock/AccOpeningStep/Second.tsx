/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Second = () => {
  return (
    <div>
      <div className='mb-4'>
        <div className='text-xs sm:text-sm text-secondary-500'>Step 2</div>
        <div className='text-base sm:text-lg font-semibold mt-2'>
          Provide your personal data
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='mb-4 md:mb-0  md:w-8/12 md:ml-2'>
          <div className='text-sm sm:text-base'>
            <div>
              <span>
                After you click the 'continue' button in "Complete your
                profile", the first question you will be asked is whether you
                allow eToro to track your activity.
              </span>
              <br />
              <br />
              <span>
                The next registration steps are easy and quick to complete.
              </span>
              <br />
              <br />
              <ol className='list-outside pl-5'>
                <li>
                  Fill in some{" "}
                  <span className='font-semibold'>personal information</span>
                </li>
                <li>
                  Verify your{" "}
                  <span className='font-semibold'>phone number</span>.{" "}
                </li>
              </ol>
              <br />
              <span>
                When you enter your phone number, you will be sent a{" "}
                <span className='font-semibold'>verification code via SMS</span>
                .
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
