/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

export default function WhoWeAre() {
  return (
    <div className='w-full overflow-x-hidden mb-10'>
      <div className='w-full relative text-sm sm:text-base pt-10'>
        <span className='relative -top-20' />
        <div className='relative md:px-4 w-full sm:mx-auto px-3 sm:px-6 z-20 max-w-[1000px]'>
          <div className='sm:flex-row flex flex-col sm:items-center relative'>
            <div className='flex-1'>
              <div>
                <h1 className='font-bold text-4xl lg:text-5xl w-full mb-6 sm:mb-8'>
                  We help people invest, because investing is hard
                </h1>
                <p className='mt-2 mb-4 sm:mr-4 text-base'>
                  To financially conscious people, Top5Brokers is the go-to site
                  for uncomplicated online comparison of brokers, digital banks
                  and other providers.
                </p>
                <p className='mb-10 sm:mr-4 text-base'>
                  You can read about our methodology{" "}
                  <a
                    href='/methodology'
                    className='inline max-w-max cursor-pointer text-sm sm:text-base no-underline transition md:transition-all duration-75'
                    target
                    style={{
                      background:
                        "linear-gradient(rgb(36,193,37) 0%, rgb(36,193,37) 100%) 0px 100% / 1px 1px repeat-x"
                    }}
                  >
                    <span>here</span>
                  </a>
                  .
                </p>
              </div>
              <div className='hidden sm:block mt-4' />
            </div>

            <div className='flex-1 flex justify-center items-center mb-8 sm:mb-0 mt-4 sm:mt-0'>
              <div
                className='flex-1 block h-48 w-48 sm:h-[360px] sm:w-[360px] sm:ml-4 bg-contain bg-center bg-no-repeat'
                style={{
                  backgroundImage:
                    'url("https://brokerchooser.com/images/who_we_are/team_zoom_photo.png")'
                }}
              />
            </div>
            <div className='block sm:hidden' />
          </div>
        </div>
      </div>
      <div className='w-full relative text-sm sm:text-base pt-16'>
        <span className='relative -top-20' />
        <div className='relative md:px-4 w-full sm:mx-auto px-3 sm:px-6 z-20 max-w-[1000px]'>
          <div className='sm:flex-row-reverse flex flex-col sm:items-center relative'>
            <div className='flex-1'>
              <div>
                <h2 className='lg:text-4xl sm:text-4xl md:text-left font-bold text-2xl w-full md:text-3xl text-center sm:text-left mb-4 sm:mb-6'>
                  Faces of Top5Brokers
                </h2>
                <p className='mb-4 sm:mr-4'>
                  Top5Brokers as an organization is a people-first company.
                  Everybody in our{" "}
                  <a
                    href='/team'
                    className='inline max-w-max cursor-pointer text-sm sm:text-base no-underline transition md:transition-all duration-75'
                    target
                    style={{
                      background:
                        "linear-gradient(rgb(36,193,37) 0%, rgb(36,193,37) 100%) 0px 100% / 1px 1px repeat-x"
                    }}
                  >
                    <span>team</span>
                  </a>{" "}
                  enjoys complete trust, freedom and responsibility.
                </p>
              </div>
              <div className='hidden sm:block mt-4' />
            </div>

            <div className='flex-1 flex justify-center items-center mb-8 sm:mb-0 mt-4 sm:mt-0'>
              <div
                className='flex-1 block h-48 w-48 sm:h-[360px] sm:w-[360px] sm:mr-4 bg-contain bg-center bg-no-repeat'
                style={{
                  backgroundImage:
                    'url("https://brokerchooser.com/images/who_we_are/team_faces.png")'
                }}
              />
            </div>
            <div className='block sm:hidden' />
          </div>
        </div>
      </div>
      <div className='w-full relative text-sm sm:text-base pt-12'>
        <div className='w-full h-full absolute flex justify-end flex-col bottom-0 '>
          <div className='w-full h-16 bg-secondary-50 bg-opacity-60 rounded-t-[50%]' />
          <div className='w-full bg-secondary-50 bg-opacity-60 h-1/2' />
        </div>
        <span className='relative -top-20' />
        <div className='relative md:px-4 w-full sm:mx-auto px-3 sm:px-6 z-20 max-w-[1000px]'>
          <h2 className='font-bold text-2xl w-full sm:text-3xl text-center mb-4 sm:mb-6'>
            Our core values
          </h2>
          <div className='flex flex-wrap justify-evenly w-full '>
            <div className='flex flex-col items-center'>
              <div className='shadow-md flex flex-col items-center rounded-md pt-4 px-4 bg-white pb-8 mb-2 w-full sm:w-72'>
                <div
                  className='h-16 w-16 mb-4 bg-contain bg-center bg-no-repeat'
                  style={{
                    backgroundImage:
                      'url("/images/who_we_are/card_icons/human-resource.svg")'
                  }}
                />
                <h2 className='font-semibold text-xl md:text-2xl w-3/4 sm:w-auto sm:max-w-sm mb-4 text-center'>
                  We are transparent and honest
                </h2>
                <div className='text-center text-sm sm:text-base mb-4'>
                  With our customers, partners and team.
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <div className='shadow-md flex flex-col items-center rounded-md pt-4 px-4 bg-white pb-8 mb-2 w-full sm:w-72'>
                <div
                  className='h-16 w-16 mb-4 bg-contain bg-center bg-no-repeat'
                  style={{
                    backgroundImage:
                      'url("/images/who_we_are/card_icons/outstanding.svg")'
                  }}
                />
                <h2 className='font-semibold text-xl md:text-2xl w-3/4 sm:w-auto sm:max-w-sm mb-4 text-center'>
                  We uphold the highest standards in all our actions
                </h2>
                <div className='text-center text-sm sm:text-base mb-4'>
                  We take responsibility.
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <div className='shadow-md flex flex-col items-center rounded-md pt-4 px-4 bg-white pb-8 mb-2 w-full sm:w-72'>
                <div
                  className='h-16 w-16 mb-4 bg-contain bg-center bg-no-repeat'
                  style={{
                    backgroundImage:
                      'url("/images/who_we_are/card_icons/success.svg")'
                  }}
                />
                <h2 className='font-semibold text-xl md:text-2xl w-3/4 sm:w-auto sm:max-w-sm mb-4 text-center'>
                  We pursue growth and learning
                </h2>
                <div className='text-center text-sm sm:text-base mb-4'>
                  We give and ask for feedback and act on it.
                </div>
              </div>
            </div>
          </div>
          <p className='text-center mt-10'>
            We are very proud of the ‘BC culture’ we are shaping together day by
            day. <br />
            It’s a constant inspiration working with extremely gifted people who
            really want to make a positive impact on the world.
          </p>
        </div>
      </div>
      {/* <div className="w-full relative text-sm sm:text-base pt-8 sm:pt-16 pb-20 bg-secondary-50 bg-opacity-60">
        <span className="relative -top-20" />
        <div className="relative md:px-4 w-full sm:mx-auto px-3 sm:px-6 z-20 max-w-[1000px]">
          <h2 className="font-bold text-2xl w-full sm:text-3xl text-center mb-4 sm:mb-6">
            Watch our brand video and get to know us better!
          </h2>
          <img
            className="w-full aspect-video"
            alt="Video Preview"
            src="https://img.youtube.com/vi/VkAGVTaasE4/0.jpg"
          />
        </div>
      </div> */}
    </div>
  );
}
