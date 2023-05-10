/* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next";
import Head from "next/head";
import BrokerReviewsPage from "../../common/components/pages/broker-reviews";

const BrokerReviews: NextPage = () => {
  return (
    <>
      <Head>
        <title>Broker reviews │ Top5Brokers</title>
      </Head>
      <div>
        <BrokerReviewsPage />
      </div>
    </>
  );
};

export default BrokerReviews;
