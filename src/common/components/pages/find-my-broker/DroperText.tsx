import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { DroperComponents } from "./DroppedComponents";

const DroperText = () => {
  const [isDroperOpen, setIsDroperOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  return (
    <React.Fragment>
      {DroperComponents.map(({ Component, title }, index) => {
        return (
          <React.Fragment key={index}>
            <div
              className='w-full text-sm sm:text-base'
              onClick={() => setCurrentIndex(index)}
            >
              <div
                className='flex justify-between items-center font-semibold border-b border-gray-300 py-3 cursor-pointer select-none text-sm sm:text-base'
                onClick={() => setIsDroperOpen(!isDroperOpen)}
              >
                <h2
                  className={`font-bold ${
                    isDroperOpen &&
                    currentIndex === index &&
                    "text-secondary-400"
                  }`}
                >
                  {title}
                </h2>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`w-5 font-semibold text-[12px] ${
                    isDroperOpen && index === currentIndex
                      ? "rotate-180"
                      : "rotate-0"
                  } duration-150`}
                />
              </div>
              {isDroperOpen && index == currentIndex && <Component />}
            </div>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

export default DroperText;
