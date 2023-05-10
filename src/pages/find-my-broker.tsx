/* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next";
import Head from "next/head";
import FindMyBrokerPage from "../common/components/pages/find-my-broker";

const FindMyBroker: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Find My Broker – The definitive tool for your online broker search
        </title>
      </Head>
      <div>
        <FindMyBrokerPage />
      </div>
    </>
  );
};

export default FindMyBroker;
