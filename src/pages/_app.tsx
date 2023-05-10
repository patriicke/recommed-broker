import type { AppProps } from "next/app";
import { useState } from "react";
import { CommonContext } from "../context/CommonContext";
import "./../styles/global.css";
import "./../styles/global.all.css";
import MainLayout from "../layout/MainLayout";
import { CompareContextProvider } from "../common/components/pages/compare/context";

function MyApp({ Component, pageProps }: AppProps) {
  const [searcComponent, setSeachComponent] = useState<boolean>(false);
  const [showDrop, setShowDrop] = useState<number>(0);
  return (
    <CommonContext.Provider
      value={{ searcComponent, setSeachComponent, showDrop, setShowDrop }}
    >
      <CompareContextProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </CompareContextProvider>
    </CommonContext.Provider>
  );
}

export default MyApp;
