/* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next";
import React from "react";
import Head from "next/head";
import HomePage from "../common/components/pages/home";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Top5Brokers</title>
      </Head>
      <div>
        <HomePage />
      </div>
    </>
  );
};

export default Home;
