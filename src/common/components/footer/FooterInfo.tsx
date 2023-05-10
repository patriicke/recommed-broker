import { NextPage } from "next";
import Link from "next/link";
import React from "react";

const FooterInfo: NextPage = () => {
  return (
    <footer className='bc_footer font-sans'>
      <div className='bc_footer_container '>
        <div className='bc_footer_nav_col'>
          <div className='disclaimer'>
            <strong>Disclaimer:</strong> <br />
            <p className="mr-1">
              Please note that by investing in and/or trading financial
              instruments, commodities and any other assets, you are taking a high
              degree of risk and you can lose all your deposited money. You should
              engage in any such activity only if you are fully aware of the
              relevant risks. top5brokers does not provide investment or any
              other advice, for further information please read our
            </p>
            <Link href="/general-terms-and-conditions">General Terms and Conditions</Link>
            <br />
          </div>
        </div>
        <div className='bc_footer_nav_col'></div>
      </div>
      <div className='bc_footer_container'>
        <div className='bc_footer_nav_col'>
          <p className='disclaimer' id='advertiser-disclosure'>
            <strong>Advertiser Disclosure:</strong>
            <br />
            At top5brokers, we consider clarity and transparency as core
            values. top5brokers is free to use for everyone, but earns a
            commission from some of its partners with no additional cost to you
            (please find the{" "}
            <Link href='/#advertiser-disclosure'>
              list of such partners here
            </Link>
            ). However, please note that all the material and information made
            available by top5brokers or any of its affiliates is based on{" "}
            <Link href='/review-methodology'>
              our proprietary professional methodology
            </Link>
            , which is unbiased, prepared in accordance with the best interest
            of our customers and most importantly independent from the
            remuneration structure we have in place with some of our partners.
          </p>
        </div>
        <div className='bc_footer_nav_col copyright'>
          Copyright{" "}
          <span style={{ fontWeight: "700" }}>
            TOP5<span className='text-primary-500'>BROKERS</span>
          </span>{" "}
          2023.
          <p>
            {/* <Link href="/privacy-policy" className="text-primary-500 mr-1">Privacy Policy</Link><br /> */}
            {/* <Link href="/cookie-policy" className="text-primary-500 mr-1">Cookie Policy</Link><br /> */}
            <a href="https://www.iubenda.com/privacy-policy/8253309/full-legal" className="text-primary-500 mr-1">Privacy Policy</a><br />
            <a href="https://www.iubenda.com/privacy-policy/8253309/cookie-policy" className="text-primary-500 mr-1">Cookie Policy</a><br />
            <Link href="/general-terms-and-conditions" className="text-primary-500 mr-1">General Terms and Conditions</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterInfo;
