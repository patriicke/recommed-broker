import { NextPage } from "next";

export const OpenMenuButton: NextPage = () => {
  return (
    <span className='bc-navbar-icon flex flex-wrap h-full w-8 justify-center'>
      <svg
        className='h-4 w-4'
        viewBox='0 0 16 12'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M0 0H16V2H0V0ZM0 5H16V7H0V5ZM0 10H16V12H0V10Z' fill='white' />
      </svg>
      <span className='uppercase text-white text-[8px] tracking-widest mt-1 leading-3'>
        Menu
      </span>
    </span>
  );
};

export const CloseMenuButton: NextPage = () => {
  return (
    <span className='bc-navbar-icon flex flex-wrap h-full w-8 justify-center'>
      <svg
        className='h-4 w-4'
        viewBox='0 0 12 12'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M10.192 0.343994L5.94897 4.58599L1.70697 0.343994L0.292969 1.75799L4.53497 5.99999L0.292969 10.242L1.70697 11.656L5.94897 7.41399L10.192 11.656L11.606 10.242L7.36397 5.99999L11.606 1.75799L10.192 0.343994Z'
          fill='white'
        />
      </svg>
      <span className='uppercase text-white text-[8px] tracking-widest mt-1 leading-3'>
        Close
      </span>
    </span>
  );
};

export const MenuButton: NextPage<{
  showMenu: boolean;
  setShowMenu: Function;
}> = ({ showMenu, setShowMenu }) => {
  return (
    <span onClick={() => setShowMenu((cur: boolean) => !cur)}>
      {showMenu ? <CloseMenuButton /> : <OpenMenuButton />}
    </span>
  );
};
