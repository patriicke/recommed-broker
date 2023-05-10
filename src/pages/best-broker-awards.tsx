/* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next";
import Head from "next/head";
import BestBrokerAwardPage from "../common/components/pages/best-broker-awards";

const FindMyBroker: NextPage = () => {
  return (
    <>
      <Head>
        <title>Top5brokers Awards 2023</title>
      </Head>
      <div>
        <BestBrokerAwardPage />
      </div>
    </>
  );
};

export default FindMyBroker;
