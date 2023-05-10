/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import { Swiper, SwiperSlide } from "swiper/react";
import CompareChoosenBrokers from "./CompareChoosenBrokers";
import { brokers } from "../../../../data";
import { CompareContext, ICompareContext } from "./context";
import { useRouter } from "next/router";
import { IBroker } from "../../../types";
import "swiper/css";

const CompareTopComponent = () => {
  const [swiper, setSwiper] = useState<any>(null);

  const [windowWidth, setWindowWidth] = useState<number>(1);

  const router = useRouter();

  const { brokers: queryString } = router.query;

  const {
    startingBrokerIndex,
    setStartingBrokerIndex,
    topBarBrokers,
    setTopBarBrokers
  } = useContext<ICompareContext>(CompareContext);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const [actualBrokers, setActualBrokers] = useState<any>([]);

  useEffect(() => {
    if (!queryString) {
      setActualBrokers(brokers);
      setTopBarBrokers(brokers);
    } else {
      const chooseBrokerArray = (queryString as string)
        ?.split(",")
        .map((str) => {
          if (
            brokers.find(
              (broker) => broker.broker_id.toString() === str.toString()
            )
          )
            return brokers.find(
              (broker) => broker.broker_id.toString() === str
            );
        });
      const filtered = chooseBrokerArray.filter(
        (broker) => broker?.broker_id !== undefined
      );
      setActualBrokers(filtered);
      setTopBarBrokers(filtered);
    }
  }, [queryString]);

  const handleValue = (value: number) => {
    (swiper as any)?.slideTo(value, 500);
    setStartingBrokerIndex(value);
  };

  const handleSliderChange = (value: number, _index: number) => {
    if (swiper) {
      handleValue(Number(value));
    }
    return "";
  };

  const handleSwiperChange = (swiper: any) => {
    handleValue(swiper.activeIndex);
  };

  useEffect(() => {
    if (!queryString) return;
    if (startingBrokerIndex >= topBarBrokers.length - 1) return;
    setTopBarBrokers(
      (actualBrokers as []).slice(
        startingBrokerIndex,
        (Math.floor(windowWidth / 340) >= 1
          ? Math.floor(windowWidth / 340)
          : 1) + startingBrokerIndex
      )
    );
  }, [startingBrokerIndex, actualBrokers, queryString]);

  return (
    <div className='w-full overflow-hidden relative z-40'>
      {!topBarBrokers.length ? (
        <div className='text-center py-2 text-green-500'>
          Sorry, these brokers are not found! Try searching again!
        </div>
      ) : (
        <>
          <div className='shadow-md h-[284px]'>
            <div
              className='w-full flex flex-row items-center justify-center'
              style={{ height: "50px" }}
            >
              <p className='block pt-1'>
                <span className='hidden sm:block text-base'>
                  Currently you see <strong>{topBarBrokers?.length}</strong>{" "}
                  brokers (out of <strong>{brokers.length}</strong>) that
                  accepts traders from <strong>Nigeria</strong>
                </span>
                <span className='block sm:hidden text-sm'>
                  <strong>{brokers.length}</strong> brokers from{" "}
                  <strong>Nigeria</strong>
                </span>
              </p>
            </div>
            <div className='px-4'>
              <div className='w-full flex items-center justify-center'>
                <div className='w-full opacity-80' style={{ height: "32px" }}>
                  <Box>
                    <Slider
                      defaultValue={startingBrokerIndex}
                      getAriaValueText={handleSliderChange}
                      step={1}
                      size={"small"}
                      marks
                      min={0}
                      max={Number(topBarBrokers.length) + 1}
                      onChange={(
                        event: Event,
                        newValue?: number | number[]
                      ) => {
                        setStartingBrokerIndex(newValue);
                      }}
                      value={startingBrokerIndex}
                    />
                  </Box>
                </div>
              </div>
            </div>
            <div className='overflow-hidden'>
              <div className='relative w-full px-10'>
                <Swiper
                  spaceBetween={50}
                  slidesPerView={
                    Math.floor(windowWidth / 340) >= 1
                      ? Math.floor(windowWidth / 340)
                      : 1
                  }
                  initialSlide={startingBrokerIndex}
                  onSlideChange={handleSwiperChange}
                  onSwiper={(s: any) => {
                    setSwiper(s);
                  }}
                  onChange={handleSwiperChange}
                  className='h-full w-full'
                >
                  {topBarBrokers.map((broker) => {
                    return (
                      <SwiperSlide
                        key={Number(broker.broker_id) * Math.random()}
                      >
                        <div
                          className='border-box w-[240px] mx-2 flex flex-col items-center p-4 pt-1 rounded-lg'
                          style={{ height: "260px" }}
                        >
                          <a
                            className='contents w-10 h-10 mb-4'
                            href={broker.broker_details.broker_link}
                            rel='noreferrer nofollow'
                            target='_blank'
                          >
                            <img
                              className='grow-0 shrink-0 rounded-sm mb-4'
                              src={broker.broker_details.broker_logo}
                              alt={`${broker.broker_details.name} logo`}
                              style={{
                                width: "40px",
                                height: "40px",
                                flexBasis: "40px"
                              }}
                            />
                          </a>
                          <p className='text-center font-medium text-sm sm:text-base min-h-[40px] sm:min-h-0'>
                            {broker.broker_details.name}
                          </p>
                          <div className='flex items-center relative w-max flex-col'>
                            <a
                              className='flex flex-row items-center justify-center font-medium uppercase tracking-wider cursor-pointer select-none shadow-bc hover:shadow-bcHover rounded-lg box-border whitespace-nowrap  text-xs sm:text-sm h-6 sm:h-8 px-[9px] sm:px-[13px] bg-secondary-500 text-white'
                              rel='noreferrer nofollow'
                              target='_blank'
                              href={broker.broker_details.broker_link}
                            >
                              Visit Broker
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                className='w-3 h-3'
                              >
                                <path
                                  fillRule='evenodd'
                                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                                  clipRule='evenodd'
                                />
                              </svg>
                            </a>
                          </div>
                          <p className='pt-2 text-center text-2xs sm:text-xs leading-none'>
                            {broker.broker_details.broker_description}
                          </p>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <div
                className={`${
                  startingBrokerIndex >= topBarBrokers.length + 1 && "hidden"
                } absolute right-1 sm:right-4 top-28 lg:top-32 z-50`}
                onClick={() => {
                  setStartingBrokerIndex(Number(startingBrokerIndex + 1));
                }}
              >
                <div className='h-12 w-12 sm:h-20 sm:w-20 flex items-center justify-center text-secondary-500 hover:text-secondary-300 cursor-pointer'>
                  <span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      className='h-12 w-12 sm:h-20 sm:w-20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div
                className={`${
                  startingBrokerIndex <= 0 && "hidden"
                } absolute left-1 sm:left-4 top-28 lg:top-32 z-50`}
                onClick={() => {
                  setStartingBrokerIndex(startingBrokerIndex - 1);
                }}
              >
                <div className='h-12 w-12 sm:h-20 sm:w-20 flex items-center justify-center text-secondary-500 hover:text-secondary-300 cursor-pointer'>
                  <span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      className='h-12 w-12 sm:h-20 sm:w-20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <CompareChoosenBrokers />
        </>
      )}
    </div>
  );
};

export default CompareTopComponent;
