/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { testimonials } from "../../../../../data";

const ReviewComponent = () => {
  const [starting, setStarting] = useState<number>(0);

  const [swiper, setSwiper] = useState<any>(null);

  const handleSwiperChange = (swiper: any) => {
    setStarting(Number(swiper.activeIndex));
  };

  const valueChange = () => {
    (swiper as any)?.slideTo(starting, 500);
  };

  useEffect(() => {
    valueChange();
  }, [starting]);

  return (
    <div className="w-full relative text-sm sm:text-base py-10 sm:pt-14 sm:pb-20">
      <div className="my-32 w-full flex items-center justify-center">
        <span className="relative -top-20" />
        <div className="relative w-full sm:mx-auto px-3 sm:px-6 z-20 max-w-[1000px]">
          <h2 className="font-bold text-2xl w-full sm:text-3xl text-center mb-4 sm:mb-6 font-geomanistMedium">
            <div className="text-sm uppercase text-primary-500 mb-2.5">
              Testimonials
            </div>
            What our users say about us
          </h2>
          <br />
          <div className="flex flex-col justify-center">
            <div className="w-full flex justify-between items-center">
              <div className="w-12 h-12">
                <button
                  className="w-12 h-12 bg-contain bg-center bg-no-repeat cursor-pointer"
                  style={{
                    backgroundImage:
                      'url("/images/icons/carousel_left_button.png")',
                  }}
                  onClick={() => {
                    if (starting === 0) setStarting(testimonials.length - 1);
                    else setStarting(starting - 1);
                  }}
                />
              </div>
              <div className="flex flex-col justify-start transition-opacity ease-in-out duration-300 opacity-100 w-[200px] sm:w-[350px] lg:w-[800px]">
                <Swiper
                  slidesPerView={1}
                  initialSlide={starting}
                  onSwiper={(s: any) => {
                    setSwiper(s);
                  }}
                  onSlideChange={handleSwiperChange}
                  onChange={handleSwiperChange}
                  className="h-full w-full"
                >
                  {testimonials.map((item, _index) => {
                    return (
                      <SwiperSlide
                        className="flex items-start sm:items-start h-[28rem] sm:h-64 "
                        key={_index}
                      >
                        <div className="flex justify-center text-sm sm:text-base h-max max-w-2xl m-auto flex-col items-center sm:flex-row sm:items-start z-50">
                          {/* <div
                            className="w-32 h-32 mb-4 sm:mb-6 mr-4 bg-contain bg-center bg-no-repeat"
                            style={{
                              backgroundImage: `url(/images/testimonial/${item.image})`,
                            }}
                          ></div> */}
                          <div className="flex flex-col justify-start">
                            <div className="mb-4 sm:mb-8 text-gray-700 max-w-lg italic">
                              <div>"{item.content}"</div>
                            </div>
                            <div className="font-geomanistBold">
                              {item.fullName}
                            </div>
                            <div className="text-sm text-gray-500">
                              {item.status}
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
                <br />
                <div className="mt-4 flex justify-center items-center">
                  {testimonials.map((_review, _idx) => {
                    return (
                      <div
                        className={`${
                          starting === _idx ? 'w-4 h-4' : 'w-2 h-2'
                        }  mx-1 rounded-full cursor-pointer bg-secondary-500`}
                        key={_idx}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="w-12 h-12">
                <button
                  className="w-12 h-12 bg-contain bg-center bg-no-repeat cursor-pointer"
                  style={{
                    backgroundImage:
                      'url("/images/icons/carousel_right_button.png")',
                  }}
                  onClick={() => {
                    if (starting === testimonials.length - 1) setStarting(0);
                    else setStarting(starting + 1);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewComponent;
