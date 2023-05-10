import { NextPage } from "next";

const FellLostComponent: NextPage = () => {
  return (
    <div className='shadow-md flex flex-col items-center rounded-md py-6 px-3 bg-white mt-4 w-64 mx-2'>
      <h2 className='font-semibold text-2xl w-3/4 sm:w-auto sm:max-w-sm mb-4 text-center'>
        Best Stock Brokers in 2023
      </h2>
      <div className='text-center text-sm sm:text-base mb-4'>
        To help you to find the best stock broker, we first selected 102 quality
        brokers; then we scrutinized ...
      </div>
      <a
        href='/best-brokers/best-stock-brokers'
        className='inline max-w-max cursor-pointer text-sm sm:text-base no-underline transition-all duration-75'
        target='_blank'
        style={{
          background:
            "linear-gradient(rgb(253, 173, 0) 0%, rgb(253, 173, 0) 100%) 0px 100% / 1px 1px repeat-x"
        }}
      >
        <span>Learn more</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className='inline mb-px h-5 w-5 ml-2'
        >
          <path
            fillRule='evenodd'
            d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
            clipRule='evenodd'
          ></path>
        </svg>
      </a>
    </div>
  );
};

export default FellLostComponent;
