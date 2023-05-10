/* eslint-disable @next/next/no-html-link-for-pages */
import { NextPage } from "next";
import { brokers } from "../../../data";

const FooterAbout: NextPage = () => {
  return (
    <section className='bc_footer_nav font-sans'>
      <div className='!hidden bc_footer_container'>
        <div className='bc_footer_nav_col'>
          <h4>About</h4>
          <ul>
            <li>
              <a href='/who-we-are'>Who we are</a>
            </li>
            {/* <li>
              <a href='/for-businesses'>For Businesses</a>
            </li> */}
            <li>
              <a href='/methodology'>Our Methodology</a>
            </li>
            {/* <li>
              <a href='/team'>Our Team</a>
            </li> */}
            {/* <li>
              <a href='/education/news'>News</a>
            </li> */}
            {/* <li>
              <a href='/careers'>Careers</a>
            </li> */}
            <li>
              <a href='/contact'>Contact</a>
            </li>
            {/* <li>
              <a href=''>Data dashboard</a>
            </li> */}
          </ul>
        </div>
        <div className='bc_footer_nav_col'>
          <h4>Discover</h4>
          <ul className='grid grid-cols-2 md:grid-cols-1'>
            <li>
              <a href='/#'>Best brokers 2023</a>
            </li>
            <li>
              <a href='/find-my-broker'>Find my broker</a>
            </li>
            <li>
              <a href='/education'>Education</a>
            </li>
            <li>
              <a href='/compare-brokerage'>Compare brokers</a>
            </li>
            <li>
              <a href='/broker-reviews'>Broker reviews</a>
            </li>
          </ul>
        </div>
        <div className='bc_footer_nav_col'>
          <h4>Follow us</h4>
          <ul id='follow-us' className='flex gap-3 md:gap-2 md:flex-col'>
            <li>
              <a href='/#'>
                <i
                  className='fa fa-facebook-square text-2xl '
                  aria-hidden='true'
                ></i>
              </a>
            </li>
            <li>
              <a href='/#'>
                <i
                  className='fa fa-twitter-square text-2xl'
                  aria-hidden='true'
                ></i>
              </a>
            </li>
            <li>
              <a href='/#'>
                <i
                  className='fa fa-linkedin-square text-2xl'
                  aria-hidden='true'
                ></i>
              </a>
            </li>
            <li>
              <a href='/#'>
                <i
                  className='fa fa-youtube-square text-2xl'
                  aria-hidden='true'
                ></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='bc_footer_container'>
        <div className='bc_footer_nav_col'>
          <h4>Highest rated brokers</h4>
          <ul className='grid grid-cols-2'>
            {brokers.map((broker) => {
              return (
                <li key={broker.broker_id}>
                  <a
                    // href={`/broker-reviews/${broker.broker_details.name.trim().toLowerCase()}`}
                    href={broker.broker_details.broker_link}
                  >
                    {broker.broker_details.name}
                  </a>
                  {/*  */}
                </li>
              );
            })}
          </ul>
        </div>
        {/* <div className="bc_footer_nav_col">
          <h4>Country specific recommendations</h4>
          <ul>
            <li>
              <a href="#">Nigeria</a>
            </li>
          </ul>
        </div> */}
      </div>

      {/* <div className='bc_footer_container'>
        <div className='bc_footer_nav_col'>
          <h4>Regional settings</h4>
          <div>
            <a href='/regional-settings?returnUrl=https%3A%2F'>Nigeria</a>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default FooterAbout;
