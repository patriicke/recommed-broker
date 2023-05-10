import Head from "next/head";
import React from "react";
import EducationPage from "../common/components/pages/education";

const Education = () => {
  return (
    <>
      <Head>
        <title>Learn about investments and assets</title>
      </Head>
      <div>
        <EducationPage />
      </div>
    </>
  );
};

export default Education;
