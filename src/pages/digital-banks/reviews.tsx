import Head from "next/head";
import React from "react";
import ReviewsPage from "../../common/components/pages/digital-banks/reviews";

const Reviews = () => {
  return (
    <>
      <Head>
        <title>Digital bank reviews │ Top5Brokers</title>
      </Head>
      <div>
        <ReviewsPage />
      </div>
    </>
  );
};

export default Reviews;
