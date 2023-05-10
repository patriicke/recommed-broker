/* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next";
import Head from "next/head";
import ComparePage from "../../common/components/pages/compare";

const Compare: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Online Broker Comparison - Top Global Online Brokers Compared
        </title>
      </Head>
      <div>
        <ComparePage />
      </div>
    </>
  );
};

export default Compare;
