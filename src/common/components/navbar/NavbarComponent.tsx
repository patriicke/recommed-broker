import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React, {
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import ButtonDropDown from '../../elements/ButtonDropDown';
import { MenuButton } from '../../elements/MenuButtons';
import BestBrokersDrop from './BestBrokersDrop';
import BrokerReviewDrop from './BrokerReviewDrop';
import EductionDrop from './EducationDrop';
import { useRouter } from 'next/router';
import { CommonContext } from '../../../context/CommonContext';
import { ICommonContext } from '../../types';
import { useClickOutside } from 'react-click-outside-hook';

const RightArrow: NextPage = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="inline h-4 w-4 rotate-180 mr-1 lg:hidden"
  >
    <path
      fillRule="evenodd"
      d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const NavbarComponent: NextPage = () => {
  const [parentRef, isClickedOutside] = useClickOutside();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const router = useRouter();

  const { setShowDrop } = useContext<ICommonContext>(CommonContext);

  const NavLinks: { name: string; href: string }[] = [
    { name: 'Find My Broker', href: '/find-my-broker' },
    { name: 'Compare Brokers', href: '/compare' },
    { name: 'Buy my first stock', href: '/my-first-stock-trade-quest' },
    { name: 'Education', href: '/education' },
  ];

  const NavDropLinks: {
    name: string;
    dropElement: ReactNode;
    dispNumber: number;
  }[] = [
    {
      name: 'Best brokers',
      dropElement: <BestBrokersDrop />,
      dispNumber: 2,
    },
    {
      name: 'Broker reviews',
      dropElement: <BrokerReviewDrop />,
      dispNumber: 3,
    },
    // {
    //   name: 'Education',
    //   dropElement: <EductionDrop />,
    //   dispNumber: 4,
    // },
  ];

  const NAVBAR_COMPONENT: any = useRef(null);

  useEffect(() => {
    if (isClickedOutside) {
      setShowDrop(false);
      setShowMenu(false);
    }
  }, [isClickedOutside, setShowDrop]);

  useEffect(() => {
    const clickEvent = () => {
      if (!NAVBAR_COMPONENT.current?.contains(event?.target))
        setShowDrop(false);
      setShowMenu(false);
    };
    // document.addEventListener("mousedown", clickEvent);
    // return () => document.removeEventListener("mousedown", clickEvent);
  }, [NAVBAR_COMPONENT, setShowDrop]);

  return (
    <nav
      className="bg-black flex flex-col lg:flex-wrap text-md font-sans
      sticky top-0 w-full z-50"
      style={{ height: '60px' }}
      id="nav-bar"
      // ref={NAVBAR_COMPONENT}
      ref={parentRef}
    >
      <div className="w-full h-full lg:max-w-[1250px] lg:flex lg:mx-auto">
        <div className="flex h-full pl-4">
          <div className="flex py-4">
            <Image
              src="/favicon/favicon.png"
              alt="logos"
              className="cursor-pointer"
              width={'240'}
              height={'20'}
              onClick={() => router.push('/')}
            />
          </div>
          <div className="ml-auto mr-4 lg:hidden flex flex-row items-center">
            <button className="bc-navbar-hamburger-icon cursor-pointer">
              <span className="sr-only">Toggle navigation</span>
              <MenuButton showMenu={showMenu} setShowMenu={setShowMenu} />
            </button>
          </div>
        </div>
        <ul
          className={`${
            showMenu ? '' : 'hidden'
          } bc-navbar-menu lg:mt-0 lg:ml-auto my-0 lg:flex text-white items-center bg-black`}
          style={{ height: '60px' }}
        >
          {NavLinks.map(({ href, name }) => {
            return (
              <Link href={href} key={name}>
                <a
                  key={name}
                  className="h-full flex items-center bg-black px-6 lg:px-0"
                  onClick={(e) => {
                    setShowMenu(false);
                  }}
                >
                  {/* <Link
                    href={href}
                    onClick={() => {
                      console.log('sdlkf');
                      setShowMenu(false);
                    }}
                  > */}
                  <span
                    className="h-full lg:h-auto w-full lg:w-auto lg:px-2 lg:py-1 lg:m-1 flex items-center lg:border-2 lg:rounded-lg lg:hover:border-primary-400 hover:text-white active:text-primary-400 lg:hover:text-primary-400 hover:no-underline text-base font-medium select-none border-t border-gray-700 border-t-black text-white lg:border-white cursor-pointer"
                    data-ga-event-category="Navbar navigation"
                    data-ga-event-impression
                    data-ga-event-click={1}
                  >
                    <span className="flex-1 text-left">{name}</span>
                    <RightArrow />
                  </span>
                  {/* </Link> */}
                </a>
              </Link>
            );
          })}

          {NavDropLinks.map(({ name, dropElement, dispNumber }) => {
            return (
              <span key={name}>
                <li
                  className="h-full text-base bg-black px-6 lg:px-0 bc-navbar-section-compare-brokers group hidden lg:block"
                  onMouseEnter={() => setShowDrop(dispNumber)}
                >
                  <ButtonDropDown text={name} dispNumber={dispNumber} />
                  {dropElement}
                </li>
                <li className="h-full text-base bg-black px-6 lg:px-0 bc-navbar-section-compare-brokers group lg:hidden">
                  <ButtonDropDown text={name} dispNumber={dispNumber} />
                  {dropElement}
                </li>
              </span>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponent;
