/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Head from "next/head";
import MyFirstStockTradeQuestPage from "../common/components/pages/my-first-stock-trade-quest";
const MyFirstStockTradeQuest = () => {
  return (
    <>
      <Head>
        <title>Top5brokers: Find quality online brokers in minutes</title>
      </Head>
      <div>
        <MyFirstStockTradeQuestPage />
      </div>
    </>
  );
};

export default MyFirstStockTradeQuest;
